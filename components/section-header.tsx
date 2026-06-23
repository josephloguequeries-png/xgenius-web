type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header">
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
