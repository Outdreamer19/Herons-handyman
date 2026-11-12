export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  details: string;
};

const limits: Record<keyof QuoteRequest, number> = {
  name: 120,
  phone: 40,
  email: 200,
  service: 80,
  preferredDate: 10,
  details: 4000,
};

export function parseQuote(input: unknown): { data?: QuoteRequest; error?: string } {
  if (!input || typeof input !== "object") return { error: "Invalid request." };
  const raw = input as Record<string, unknown>;

  const data = {} as QuoteRequest;
  for (const key of Object.keys(limits) as (keyof QuoteRequest)[]) {
    const value = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    if (value.length > limits[key]) return { error: `${key} is too long.` };
    data[key] = value;
  }

  if (!data.name || !data.phone || !data.email || !data.service || !data.details) {
    return { error: "Please fill in your name, phone, email, service and job details." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: "Please enter a valid email address." };
  if (data.preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(data.preferredDate)) data.preferredDate = "";

  return { data };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
