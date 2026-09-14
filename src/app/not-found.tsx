import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="container-site py-20 text-center">
      <h1 className="text-3xl font-semibold">Страница не найдена</h1>
      <p className="mt-3 text-graphite-muted">Проверьте адрес или вернитесь в каталог.</p>
      <div className="mt-6 flex justify-center gap-3">
        <ButtonLink href="/catalog">Каталог</ButtonLink>
        <Link href="/" className="text-sm font-semibold text-accent">
          На главную
        </Link>
      </div>
    </div>
  );
}
