import Image from "next/image";
import type { ReactNode } from "react";
import type { Product, ProductVisual } from "@/types/catalog";
import { cn } from "@/lib/cn";

function Icon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("h-20 w-20 text-graphite", className)}
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons: Record<ProductVisual, ReactNode> = {
  equipment: (
    <Icon>
      <rect x="20" y="18" width="40" height="44" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M30 32h20M30 42h20M30 52h12" stroke="currentColor" strokeWidth="2.5" />
    </Icon>
  ),
  "hammer-drill": (
    <Icon>
      <rect x="18" y="28" width="36" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M54 36h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 44v14M36 44v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="26" cy="36" r="3" fill="#E85D04" />
    </Icon>
  ),
  grinder: (
    <Icon>
      <circle cx="48" cy="40" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="48" cy="40" r="4" fill="#E85D04" />
      <rect x="14" y="32" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
    </Icon>
  ),
  driver: (
    <Icon>
      <rect x="30" y="14" width="14" height="34" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M37 48v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 28h18" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  "miter-saw": (
    <Icon>
      <path d="M16 58h48L52 34H28L16 58Z" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="28" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M40 18v-6" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  breaker: (
    <Icon>
      <path d="M32 12h16v18l8 36H24l8-36V12Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 30h24" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  vacuum: (
    <Icon>
      <rect x="22" y="28" width="30" height="28" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M52 36c10 0 14 8 14 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="30" cy="58" r="5" stroke="#E85D04" strokeWidth="2.5" />
      <circle cx="46" cy="58" r="5" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  mixer: (
    <Icon>
      <circle cx="40" cy="36" r="16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 50 22 66h36l-6-16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="36" r="5" fill="#E85D04" />
    </Icon>
  ),
  compactor: (
    <Icon>
      <rect x="16" y="50" width="48" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="22" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M40 22V14" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  scaffold: (
    <Icon>
      <rect x="20" y="16" width="40" height="48" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 32h40M20 48h40M28 16v48M52 16v48" stroke="currentColor" strokeWidth="2" />
      <path d="M20 16l40 48" stroke="#E85D04" strokeWidth="2" />
    </Icon>
  ),
  laser: (
    <Icon>
      <rect x="28" y="24" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M40 42v18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 33h10M52 33h10" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  generator: (
    <Icon>
      <rect x="16" y="24" width="48" height="32" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M34 36h4l-6 10h8l4-6h-6l6-10h-8l-2 6Z" fill="#E85D04" />
    </Icon>
  ),
  compressor: (
    <Icon>
      <rect x="18" y="30" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="56" cy="42" r="12" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="56" cy="42" r="4" fill="#E85D04" />
    </Icon>
  ),
  heater: (
    <Icon>
      <rect x="22" y="18" width="36" height="44" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 30c8 6 16-6 24 0M32 42c8 6 16-6 24 0" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  mower: (
    <Icon>
      <rect x="18" y="40" width="40" height="12" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="26" cy="58" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="54" cy="58" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M30 40 44 22h10" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  trimmer: (
    <Icon>
      <path d="M22 62 52 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="62" r="8" stroke="#E85D04" strokeWidth="2.5" />
      <path d="M48 16h12" stroke="currentColor" strokeWidth="2.5" />
    </Icon>
  ),
  tiller: (
    <Icon>
      <circle cx="28" cy="50" r="12" stroke="currentColor" strokeWidth="2.5" />
      <rect x="38" y="26" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 38V22h12" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  disc: (
    <Icon>
      <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="6" stroke="#E85D04" strokeWidth="2.5" />
      <path d="M40 22v8M40 50v8M22 40h8M50 40h8" stroke="currentColor" strokeWidth="2" />
    </Icon>
  ),
  cable: (
    <Icon>
      <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M56 28c8 8 8 20 4 28" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
  tripod: (
    <Icon>
      <path d="M40 16v18M40 34 22 64M40 34l18 30M28 52h24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="16" r="4" fill="#E85D04" />
    </Icon>
  ),
  chaser: (
    <Icon>
      <rect x="14" y="30" width="34" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="56" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="62" cy="48" r="8" stroke="#E85D04" strokeWidth="2.5" />
    </Icon>
  ),
};

export function ProductVisual({
  product,
  className,
  sizes = "(max-width: 640px) 100vw, 25vw",
}: {
  product: Product;
  className?: string;
  sizes?: string;
}) {
  if (product.image) {
    return (
      <div className={cn("product-photo relative h-full w-full", className)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${product.image}`}
          alt={`${product.brand} ${product.model} — ${product.name}`}
          fill
          className="object-contain p-4"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[11rem] w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#f7f8fa] to-[#eceef2]",
        className,
      )}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/15" />
      <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-graphite/5" />
      {icons[product.visual]}
      <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-graphite-muted">
        Схема · фото уточняется
      </span>
    </div>
  );
}
