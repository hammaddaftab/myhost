interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, className = '' }: SectionHeaderProps) {
  return (
    <header className={`flex flex-col gap-2 max-w-2xl ${className}`}>
      <span className="text-eyebrow text-on-surface-variant uppercase font-semibold">
        {eyebrow}
      </span>
      <h2 className="text-headline-section text-pretty text-on-surface">
        {title}
      </h2>
    </header>
  );
}
