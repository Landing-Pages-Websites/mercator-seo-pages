import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items, variant = "default" }: { items: BreadcrumbItem[]; variant?: "default" | "light" }) {
  const base = variant === "light" ? "text-sm text-white/50 mb-6" : "text-sm text-body/60 mb-6";
  const linkClass = variant === "light" ? "hover:text-white transition" : "hover:text-primary transition";
  const activeClass = variant === "light" ? "text-white font-medium" : "text-dark font-medium";

  return (
    <nav aria-label="Breadcrumb" className={base}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className={linkClass}>Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className={linkClass}>{item.label}</Link>
            ) : (
              <span className={activeClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
