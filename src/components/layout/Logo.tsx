import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M8 15.5 4.5 19a2.1 2.1 0 1 0 3 3L11 18.5M14.5 4.5l5 5M9 14l6.5-6.5a3.5 3.5 0 1 1 5 5L14 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span className="block text-sm font-semibold text-graphite">{company.name}</span>
        <span className="block text-xs text-graphite-muted">аренда инструмента</span>
      </span>
    </Link>
  );
}
