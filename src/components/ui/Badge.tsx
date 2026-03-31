import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
