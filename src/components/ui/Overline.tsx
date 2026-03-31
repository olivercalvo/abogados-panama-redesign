import { cn } from "@/lib/utils";

interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Overline({ children, className }: OverlineProps) {
  return (
    <span
      className={cn(
        "text-xs font-bold uppercase tracking-[2.5px] text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
