import { company } from "@/data/company";
import { isPlaceholder } from "@/lib/placeholders";

export function TopBar() {
  return (
    <div className="border-b border-line bg-surface text-sm text-graphite-muted">
      <div className="container-site flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-medium text-graphite">{company.serviceArea}</span>
          <span className="mx-2 text-line">·</span>
          <span>{company.address}</span>
        </p>
        <p>
          {isPlaceholder(company.hours) ? (
            <span>{company.hours}</span>
          ) : (
            <span>График: {company.hours}</span>
          )}
        </p>
      </div>
    </div>
  );
}
