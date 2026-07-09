import Link from "next/link";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="#" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-display text-lg tracking-wide">PLUMFIX</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm">
              Expert plumbing services backed by quality work, honest pricing, and dependable customer care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Pages</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="transition-colors hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> +1 (647) 555-9218
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> support@plumfix.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                875 Park Avenue, New York, NY 10022, USA
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Social Links</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-navy"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="py-8 text-center text-xs text-white/50">© {new Date().getFullYear()} PlumFix. All rights reserved.</p>
      </div>
    </footer>
  );
}
