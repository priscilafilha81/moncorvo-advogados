import { useReveal } from "@/hooks/use-reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-on-scroll max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-divider" />
          <span className="text-xs tracking-[0.35em] uppercase text-gold font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
