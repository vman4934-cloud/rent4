import { site } from "@/data/company";

export function DemoBanner() {
  return (
    <div className="bg-accent-soft text-sm text-graphite">
      <p className="container-site py-2">{site.demoCatalogNotice}</p>
    </div>
  );
}
