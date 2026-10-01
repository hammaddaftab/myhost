interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, className = '' }: SectionHeaderProps) {
  return (
    <header className={`flex flex-col gap-2 max-w-2xl ${className}`}>
      <span className="text-eyebrow text-emerald-600 uppercase">
        {eyebrow}
      </span>
      <h2 className="text-headline-section text-pretty text-zinc-900">
        {title}
      </h2>
    </header>
  );
}
