import { cn } from "@/lib/utils";

type BgColor = "white" | "light" | "dark";

interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: BgColor;
  id?: string;
  className?: string;
}

const bgClasses: Record<BgColor, string> = {
  white: "bg-white",
  light: "bg-light",
  dark: "bg-dark text-white",
};

export default function SectionWrapper({
  children,
  bg = "white",
  id,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgClasses[bg], "py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
