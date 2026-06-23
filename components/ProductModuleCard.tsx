type ProductModuleCardProps = {
  title: string;
  description: string;
};

export default function ProductModuleCard({ title, description }: ProductModuleCardProps) {
  return (
    <article className="workspace-module-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
