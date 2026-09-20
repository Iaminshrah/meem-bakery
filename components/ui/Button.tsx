import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "gold" | "outline" | "ghost" | "cream";
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
};

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  outline:
    "border border-gold/70 text-gold bg-transparent hover:bg-gold hover:text-ink",
  ghost: "text-cream hover:text-gold",
  cream: "bg-cream text-chocolate hover:bg-parchment",
};

export function Button({
  children,
  href,
  className,
  variant = "gold",
  type = "button",
  onClick,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-center text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:px-7 sm:tracking-[0.22em]",
    variants[variant],
    className,
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
