import { cn } from "@/lib/utils";

interface WatermarkProps {
  text: string;
  className?: string;
}

export function Watermark({ text, className }: WatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display uppercase leading-none text-white/[0.06]",
        "text-[22vw]",
        className,
      )}
    >
      {text}
    </span>
  );
}
