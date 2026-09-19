const rubFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function formatRub(amount: number | null) {
  return amount === null ? "Уточняется" : rubFormatter.format(amount);
}

export function formatPhoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return "";
  if (digits.length === 11 && digits.startsWith("8")) {
    return `tel:+7${digits.slice(1)}`;
  }
  if (digits.length === 11 && digits.startsWith("7")) {
    return `tel:+${digits}`;
  }
  return `tel:+${digits}`;
}

export function pluralDays(days: number) {
  const mod10 = days % 10;
  const mod100 = days % 100;
  if (mod10 === 1 && mod100 !== 11) return `${days} сутки`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${days} суток`;
  }
  return `${days} суток`;
}

export function extractDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function siteTitle(page: string, companyName: string) {
  return `${page} — ${companyName}`;
}
