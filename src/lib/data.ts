import {
  Droplets,
  Search,
  Wrench,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Search,
    title: "Leak Detection",
    description: "Identify hidden leaks early and prevent costly water damage throughout your home.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Clear stubborn clogs and restore smooth drainage with professional cleaning solutions.",
  },
  {
    icon: Wrench,
    title: "Water Heaters",
    description: "Installation, repair, and maintenance services for efficient hot water performance.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Happy Customers" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export interface WhyRow {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
}

export const whyRows: WhyRow[] = [
  {
    title: "Licensed & Certified Experts",
    description: "Skilled professionals delivering safe and dependable plumbing solutions.",
    image: "/images/why-1.jpg",
    alt: "Licensed professional working on plumbing service",
    icon: ShieldCheck,
  },
  {
    title: "Rapid Response Team",
    description: "Quick arrival times and efficient service when you need it most.",
    image: "/images/why-2.jpg",
    alt: "Technician arriving quickly for service call",
    icon: Clock3,
  },
  {
    title: "Guaranteed Workmanship",
    description: "Quality repairs and installations backed by trusted service guarantees.",
    image: "/images/why-3.jpg",
    alt: "Close-up of high-quality finishing detail",
    icon: BadgeCheck,
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Homeowner",
    rating: 5,
    quote:
      "PlumFix responded quickly and solved our plumbing issue professionally. The technician explained everything clearly and left everything spotless.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "James Carter",
    location: "Homeowner",
    rating: 5,
    quote:
      "Excellent service from start to finish. The team arrived on time, communicated clearly, and completed the work with exceptional attention.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Emily Roberts",
    location: "Homeowner",
    rating: 5,
    quote:
      "Professional, friendly, and highly skilled technicians. Transparent pricing and quality workmanship all the way through.",
    avatar: "/images/avatar-3.jpg",
  },
];

export interface GalleryItem {
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { image: "/images/gallery-1.jpg", alt: "Plumbing project in progress" },
  { image: "/images/gallery-2.jpg", alt: "Completed modern bathroom installation" },
  { image: "/images/gallery-3.jpg", alt: "Pipe and fixture installation work" },
  { image: "/images/gallery-4.jpg", alt: "Technician performing repair work" },
  { image: "/images/gallery-5.jpg", alt: "Clean finished plumbing setup" },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { name: "David Carter", role: "Lead Plumbing Technician", image: "/images/team-1.jpg" },
  { name: "Sophia Mitchell", role: "Senior Plumbing Specialist", image: "/images/team-2.jpg" },
  { name: "Michael Rodriguez", role: "Operations Manager", image: "/images/team-3.jpg" },
  { name: "Emma Wilson", role: "Customer Service Manager", image: "/images/team-4.jpg" },
  { name: "James Anderson", role: "Master Plumber", image: "/images/team-1.jpg" },
  { name: "Olivia Parker", role: "Project Coordinator", image: "/images/team-2.jpg" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What plumbing services do you offer?",
    answer:
      "We handle leak detection, drain cleaning, water heater installation and repairs, fixture replacement, and routine maintenance for residential properties.",
  },
  {
    question: "Do you offer emergency plumbing services?",
    answer:
      "Yes. Our emergency response team is available 24/7 for urgent plumbing issues like burst pipes, major leaks, and blocked drains.",
  },
  {
    question: "How quickly can a plumber arrive?",
    answer:
      "For most service areas, we can typically dispatch a technician the same day. Emergency requests are prioritized for the fastest response.",
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer:
      "Absolutely. Every member of our team is licensed, certified, and fully insured for your peace of mind.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer:
      "Yes, we provide clear, transparent quotes before work begins so there are no hidden fees or unexpected costs.",
  },
];
