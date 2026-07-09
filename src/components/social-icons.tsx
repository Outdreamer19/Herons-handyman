import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.71l.4-3.14h-3.11V7.94c0-.91.25-1.53 1.56-1.53h1.67V3.6c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.31H7.55v3.14h2.72V21h3.23Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3h3.1l-6.77 7.74L23.2 21h-6.23l-4.88-6.38L6.5 21H3.4l7.24-8.27L2.8 3h6.38l4.41 5.83L18.9 3Zm-1.09 16.17h1.72L7.28 4.74H5.43l12.38 14.43Z" />
    </svg>
  );
}
