import Link from "next/link";
import { Icon } from "@/components/Icon";
import { company } from "@/data/company";
export function TopBar() {
  return <div className="top-strip"><div className="container-site flex items-center justify-between gap-4"><span className="flex items-center gap-2"><Icon name="pin" width="13" height="13" />{company.city}<span className="hidden sm:inline text-white/50">/ Аренда для ремонта и стройки</span></span><div className="flex gap-5"><Link href="/delivery">Доставка и самовывоз</Link><Link href="/terms" className="hidden sm:inline">Условия аренды</Link></div></div></div>;
}
