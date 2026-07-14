import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-golddark hover:text-white border border-gold hover:border-golddark hover:shadow-[0_0_28px_rgba(255,75,36,0.45)]",
  outline:
    "border border-ink/25 text-ink hover:border-gold hover:text-golddark hover:shadow-[0_0_20px_rgba(255,75,36,0.2)]",
  "outline-light":
    "border border-white/30 text-white hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(255,75,36,0.28)]",
  ghost: "text-golddark hover:text-ink",
};

export default function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = cn(
    // `heat` = fabrication-theme hover physics: heats fast, cools slow
    "heat inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.18em]",
    styles[variant],
    className
  );
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
