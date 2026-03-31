import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-hover shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30",
  outline:
    "border-2 border-white/30 text-white hover:border-white hover:bg-white/5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-bold transition-all duration-300 cursor-pointer",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
