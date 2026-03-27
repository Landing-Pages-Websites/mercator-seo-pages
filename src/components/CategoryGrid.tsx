import Link from "next/link";
import { categories, categoryGroups } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {categoryGroups.map((group) => (
        <div key={group.name}>
          <h3 className="text-lg font-bold text-dark mb-4">{group.name}</h3>
          <ul className="space-y-2">
            {group.categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/commercial-construction-leads/${cat.slug}/`}
                  className="text-primary hover:text-primary-dark text-sm font-medium transition"
                >
                  {cat.name} Construction Leads →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
