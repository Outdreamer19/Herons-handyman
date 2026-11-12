import {
  Hammer,
  Paintbrush,
  Wrench,
  Boxes,
  Zap,
  Building2,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Herons Handy Service",
  shortName: "HERONS",
  tagline: "Trusted Local Handyman",
  phone: "07943 281881",
  phoneHref: "tel:+447943281881",
  email: "hello@heronshandyservice.com",
  hours: "Monday – Friday, 9:00 – 17:00",
  hoursShort: "Mon – Fri, 9:00 – 17:00",
  location: "Serving homes across the local area",
  owner: {
    name: "Jhal Heron",
    title: "Owner",
    image: "/images/about-owner.jpg",
  },
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
];

export const aboutValues = [
  {
    title: "Honest Work",
    description:
      "We explain the job clearly, quote upfront, and only recommend what your home actually needs.",
  },
  {
    title: "Careful Craftsmanship",
    description:
      "From small fixes to larger improvements, every job is finished properly and left tidy.",
  },
  {
    title: "Reliable Service",
    description:
      "We show up when we say we will, communicate clearly, and treat every home with respect.",
  },
] as const;

export const quoteServiceOptions = [
  "General Repairs",
  "Carpentry",
  "Painting & Decorating",
  "Electrical & Plumbing",
  "Assembly",
  "Renovations",
  "Other",
] as const;

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Hammer,
    title: "General Repairs",
    description:
      "Fast fixes for leaks, squeaks, cracks, and everything in between — handled properly the first time.",
  },
  {
    icon: Boxes,
    title: "Carpentry",
    description:
      "Custom shelving, trim, doors, and framing built to last with clean, precise workmanship.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description:
      "Interior and exterior painting with neat edges, even coverage, and a tidy finish every time.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "Jobs Completed" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 5, suffix: "-Day", label: "Mon – Fri Service" },
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
    title: "Licensed & Insured",
    description:
      "Every job is carried out by experienced professionals who take safety and accountability seriously.",
    image: "/images/section-4.jpg",
    alt: "Handyman carefully drilling during a home repair",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Scheduling",
    description:
      "Clear communication, on-time arrivals, and dependable service Monday through Friday, 9:00 to 17:00.",
    image: "/images/section-5.jpg",
    alt: "Craftsman focused on quality finishing work",
    icon: Clock3,
  },
  {
    title: "Quality You Can Trust",
    description:
      "From small fixes to larger improvements, we focus on durable results and workmanship that holds up.",
    image: "/images/section-6.jpg",
    alt: "Close-up of precise power tool workmanship",
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
      "Herons Handy Service responded quickly and fixed our issue professionally. Everything was explained clearly and left spotless.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "James Carter",
    location: "Homeowner",
    rating: 5,
    quote:
      "Excellent service from start to finish. They arrived on time, communicated well, and completed the work with great attention to detail.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Emily Roberts",
    location: "Homeowner",
    rating: 5,
    quote:
      "Professional, friendly, and skilled. Transparent pricing and quality workmanship throughout — we would happily recommend them.",
    avatar: "/images/avatar-3.jpg",
  },
];

export interface GalleryItem {
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { image: "/images/section-9.jpg", alt: "Angle grinder cutting metal with sparks" },
  { image: "/images/section-8.jpg", alt: "Exterior painting and trim work on a home" },
  { image: "/images/section-12.jpg", alt: "Technician servicing an overhead light fixture" },
  { image: "/images/section-10.jpg", alt: "Ceiling electrical work during a renovation" },
  { image: "/images/section-11.jpg", alt: "Maintenance work from a ladder on site" },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { name: "Marcus Reyes", role: "Lead Handyman", image: "/images/team-1.jpg" },
  { name: "Jasmine Carter", role: "Project Coordinator", image: "/images/team-2.jpg" },
  { name: "Daniel Cole", role: "Carpentry Specialist", image: "/images/team-3.jpg" },
  { name: "Priya Nair", role: "Customer Care Lead", image: "/images/team-4.jpg" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What handyman services do you offer?",
    answer:
      "We handle general repairs, carpentry, painting, small electrical and plumbing jobs, furniture assembly, and light home improvements.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are available Monday to Friday, 9:00 to 17:00. Contact us to schedule a visit within our working hours.",
  },
  {
    question: "How quickly can you attend a job?",
    answer:
      "Most standard bookings are scheduled within a few working days, depending on availability. Get in touch and we will confirm the earliest slot.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. We take safety and professionalism seriously, and appropriate insurance is in place for the work we carry out.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer:
      "Yes. We provide clear quotes before work begins so there are no hidden fees or unexpected costs.",
  },
];

export const additionalServices: Service[] = [
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    description: "Small jobs done safely — fixtures, outlets, taps, and toilets.",
  },
  {
    icon: Wrench,
    title: "Assembly",
    description: "Furniture, shelving units, and flat-pack builds, hassle-free.",
  },
  {
    icon: Building2,
    title: "Renovations",
    description: "Kitchen and bathroom refreshes from concept to finished job.",
  },
];
