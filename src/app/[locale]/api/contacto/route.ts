import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const LOGO_URL = "https://jusnet.com.mx/email.png";
const SUPPORT_EMAIL = "contacto@jusnet.com.mx";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { locale, nombre, email, telefono, asunto, mensaje } = body;

    const t = await getTranslations({ locale, namespace: "Emails.contactEmail" });

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { success: false, error: t("errorMissingFields") },
        { status: 400 }
      );
    }

    /**
     * EMAIL PARA EL NEGOCIO (Naranja con negro)
     */
    await resend.emails.send({
      from: `Justnet <${SUPPORT_EMAIL}>`,
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject: t("businessSubject", { asunto }),
      html: `
        <div style="font-family: system-ui, sans-serif; background: #fff7ed; padding: 40px 20px; color: #09090b;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ffedd5; box-shadow: 0 10px 25px rgba(249, 115, 22, 0.1);">
            
            <div style="background: #f97316; padding: 32px; text-align: center;">
              <img src="${LOGO_URL}" alt="Justnet" style="width: 150px; margin-bottom: 16px;" />
              <h1 style="margin: 0; color: #09090b; font-size: 28px; font-weight: 800;">${t("businessHeaderTitle")}</h1>
            </div>

            <div style="padding: 32px;">
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #f97316; font-size: 12px; font-weight: bold; text-transform: uppercase;">${t("clientDataTitle")}</p>
                <h2 style="margin: 0 0 16px; font-size: 24px;">${nombre}</h2>
                <p style="margin: 4px 0;"><strong>${t("labelEmail")}</strong> ${email}</p>
                <p style="margin: 4px 0;"><strong>${t("labelPhone")}</strong> ${telefono || t("notProvided")}</p>
                <p style="margin: 4px 0;"><strong>${t("labelSubject")}</strong> ${asunto}</p>
              </div>

              <div style="background: #fafafa; border-left: 4px solid #09090b; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; font-size: 12px; font-weight: bold; color: #52525b; text-transform: uppercase; margin-bottom: 8px;">${t("labelMessage")}</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-line;">${mensaje}</p>
              </div>
            </div>

          </div>
        </div>
      `,
    });

    /**
     * EMAIL DE CONFIRMACIÓN PARA EL CLIENTE (Negro con naranja)
     */
    await resend.emails.send({
      from: `Justnet <${SUPPORT_EMAIL}>`,
      to: [email],
      subject: t("confirmationSubject"),
      html: `
        <div style="font-family: system-ui, sans-serif; background: #09090b; padding: 40px 20px; color: #fafafa;">
          <div style="max-width: 600px; margin: 0 auto; background: #18181b; border-radius: 16px; overflow: hidden; border: 1px solid #27272a; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);">
            
            <div style="padding: 40px 32px; text-align: center; border-bottom: 2px solid #f97316;">
              <img src="${LOGO_URL}" alt="Justnet" style="width: 160px; margin-bottom: 20px;" />
              <h1 style="margin: 0; color: #f97316; font-size: 32px; font-weight: 800;">${t("confirmationHeaderTitle")}</h1>
            </div>

            <div style="padding: 32px;">
              <h2 style="margin: 0 0 16px; font-size: 22px;">${t("confirmationGreeting", { nombre })}</h2>
              <p style="margin: 0 0 24px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                ${t("confirmationMessage", { asunto })}
              </p>

              <div style="background: #09090b; border: 1px solid #27272a; padding: 20px; border-radius: 12px; margin-bottom: 32px;">
                <p style="margin: 0 0 8px; color: #f97316; font-size: 12px; font-weight: bold; text-transform: uppercase;">${t("confirmationYourMessage")}</p>
                <p style="margin: 0; color: #d4d4d8; font-size: 15px; line-height: 1.6; white-space: pre-line;">${mensaje}</p>
              </div>

              <div style="text-align: center; border-top: 1px solid #27272a; padding-top: 24px;">
                <p style="margin: 0 0 8px; color: #f97316; font-size: 14px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Justnet</p>
                <p style="margin: 0; color: #71717a; font-size: 13px;">${t("brandSlogan")}</p>
              </div>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el formulario" },
      { status: 500 }
    );
  }
}