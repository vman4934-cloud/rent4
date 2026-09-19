import Link from "next/link";
export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" aria-label="RentGar — на главную" className="brand-logo"><span className="brand-mark" aria-hidden="true">r<span>g</span></span><span><span className="brand-name">Rent<span>Gar</span></span>{!compact && <span className="brand-caption">ИНСТРУМЕНТ ДЛЯ ДЕЛА</span>}</span></Link>;
}
