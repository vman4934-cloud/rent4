import { company } from "@/data/company";
import { resolveCart } from "@/lib/cart-logic";
import { formatRuDate } from "@/lib/dates";
import { formatRub, pluralDays } from "@/lib/format";
import type { InquiryPayload } from "@/types/catalog";

export type NotifyResult =
  | { configured: false; channels: string[] }
  | { configured: true; channels: string[] };

function inquiryText(payload: InquiryPayload) {
  const { priced, totals } = resolveCart(payload.items);
  const lines = [
    `Заявка на аренду — ${company.name}`,
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Получение: ${payload.fulfillment === "delivery" ? "доставка" : "самовывоз"}`,
  ];
  if (payload.address) lines.push(`Адрес: ${payload.address}`);
  if (payload.comment) lines.push(`Комментарий: ${payload.comment}`);
  lines.push("", "Позиции:");
  for (const row of priced) {
    lines.push(
      `• ${row.product.name} (${row.product.model}) — ${row.item.quantity} шт., с ${formatRuDate(row.item.startDate)}, ${pluralDays(row.item.days)}, аренда ${formatRub(row.rental)}, залог ${formatRub(row.deposit)}`,
    );
  }
  lines.push(
    "",
    `Аренда: ${formatRub(totals.rental)}`,
    `Залог: ${formatRub(totals.deposit)}`,
    `Доставка: ${totals.deliveryLabel}`,
    "Наличие и условия подтверждает менеджер.",
  );
  return lines.join("\n");
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });
  if (!response.ok) {
    throw new Error("Не удалось отправить сообщение в Telegram.");
  }
  return true;
}

async function sendWebhook(payload: InquiryPayload, text: string) {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return false;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, payload }),
  });
  if (!response.ok) {
    throw new Error("Вебхук заявки вернул ошибку.");
  }
  return true;
}

async function sendEmail(text: string) {
  const host = process.env.SMTP_HOST;
  const to = process.env.INQUIRY_EMAIL_TO;
  if (!host || !to) return false;
  const nodemailer = await import("nodemailer");
  const createTransport = nodemailer.createTransport ?? nodemailer.default.createTransport;
  const transporter = createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER || to,
    to,
    subject: `Заявка на аренду — ${company.name}`,
    text,
  });
  return true;
}

export function isInquiryIntegrationConfigured() {
  return Boolean(
    (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) ||
      process.env.INQUIRY_WEBHOOK_URL ||
      (process.env.SMTP_HOST && process.env.INQUIRY_EMAIL_TO),
  );
}

export async function dispatchInquiry(payload: InquiryPayload): Promise<NotifyResult> {
  if (!isInquiryIntegrationConfigured()) {
    return { configured: false, channels: [] };
  }

  const text = inquiryText(payload);
  const channels: string[] = [];

  if (await sendTelegram(text)) channels.push("telegram");
  if (await sendWebhook(payload, text)) channels.push("webhook");
  if (await sendEmail(text)) channels.push("email");

  if (channels.length === 0) {
    throw new Error("Интеграция указана, но ни один канал не сработал.");
  }

  return { configured: true, channels };
}
