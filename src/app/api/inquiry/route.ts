import { NextResponse } from "next/server";
import { resolveCart } from "@/lib/cart-logic";
import { validateInquiry } from "@/lib/inquiry";
import { dispatchInquiry, isInquiryIntegrationConfigured } from "@/lib/notify";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Не удалось прочитать данные формы." },
      { status: 400 },
    );
  }

  const validation = validateInquiry(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, errors: validation.errors, message: "Проверьте поля формы." },
      { status: 400 },
    );
  }

  const { totals } = resolveCart(validation.payload.items);

  try {
    const result = await dispatchInquiry(validation.payload);
    if (!result.configured || !isInquiryIntegrationConfigured()) {
      return NextResponse.json({
        ok: true,
        demo: true,
        totals,
        message:
          "Демонстрационный режим: заявка принята сайтом, но интеграция с почтой или Telegram не настроена. Менеджеру заявка не отправлена.",
      });
    }

    return NextResponse.json({
      ok: true,
      demo: false,
      totals,
      message:
        "Заявка отправлена. Менеджер свяжется с вами, чтобы подтвердить наличие и окончательные условия.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Сервер не смог передать заявку. Повторите попытку или свяжитесь по телефону.",
      },
      { status: 502 },
    );
  }
}
