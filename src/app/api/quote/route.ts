import { escapeHtml, parseQuote, type QuoteRequest } from "@/lib/quote";
import { site } from "@/lib/data";

// Quote requests used to stop at a thank you message in the browser and
// never reach the business. They now go to the owner by email through
// Resend, and the customer gets an instant confirmation.
//
// Env (Vercel): RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL
// (QUOTE_FROM_EMAIL must be on a domain verified in Resend).

async function send(to: string, subject: string, html: string, replyTo?: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL,
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

function ownerEmail(q: QuoteRequest): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#555">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value || "Not given")}</strong></td></tr>`;
  return `<h2 style="font-family:sans-serif">New quote request</h2>
<table style="font-family:sans-serif;font-size:14px">
${row("Name", q.name)}${row("Phone", q.phone)}${row("Email", q.email)}${row("Service", q.service)}${row("Preferred date", q.preferredDate)}
</table>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(q.details)}</p>
<p style="font-family:sans-serif;font-size:12px;color:#777">Reply to this email to answer the customer directly.</p>`;
}

function customerEmail(q: QuoteRequest): string {
  return `<div style="font-family:sans-serif;font-size:15px;line-height:1.5">
<p>Hi ${escapeHtml(q.name.split(" ")[0])},</p>
<p>Thanks for asking ${escapeHtml(site.name)} for a quote for <strong>${escapeHtml(q.service)}</strong>. We've got your details and will be in touch during ${escapeHtml(site.hoursShort)}.</p>
<p>If it's urgent, call us on <a href="${site.phoneHref}">${escapeHtml(site.phone)}</a>.</p>
<p>${escapeHtml(site.name)}</p>
</div>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company) {
    return Response.json({ ok: true });
  }

  const { data, error } = parseQuote(body);
  if (!data) return Response.json({ error }, { status: 422 });

  const to = process.env.QUOTE_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !to || !process.env.QUOTE_FROM_EMAIL) {
    console.error("Quote form is not configured: set RESEND_API_KEY, QUOTE_TO_EMAIL and QUOTE_FROM_EMAIL");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    await send(to, `Quote request: ${data.service} from ${data.name}`, ownerEmail(data), data.email);
  } catch (e) {
    console.error("Quote email to owner failed", e);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  // The owner has the request; a failed confirmation must not fail the form.
  try {
    await send(data.email, `We've got your quote request, ${site.name}`, customerEmail(data));
  } catch (e) {
    console.error("Quote confirmation to customer failed", e);
  }

  return Response.json({ ok: true });
}
