import { rentalRules } from "@/data/tariffs";

export function toISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayISO() {
  return toISODate(new Date());
}

export function isValidISODate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00`);
  return !Number.isNaN(date.getTime()) && toISODate(date) === value;
}

export function isDateNotPast(value: string) {
  return isValidISODate(value) && value >= todayISO();
}

export function clampDays(value: number) {
  if (!Number.isFinite(value)) return rentalRules.minDays;
  return Math.min(rentalRules.maxDays, Math.max(rentalRules.minDays, Math.floor(value)));
}

export function clampQuantity(value: number, stock = rentalRules.maxQuantity) {
  const max = Math.max(1, Math.min(rentalRules.maxQuantity, Math.floor(stock) || 1));
  if (!Number.isFinite(value)) return 1;
  return Math.min(max, Math.max(1, Math.floor(value)));
}

export function formatRuDate(value: string) {
  if (!isValidISODate(value)) return value;
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}
