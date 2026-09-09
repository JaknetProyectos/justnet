import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Variables de configuración
const COMPANY_EMAIL = "contacto@jusnet.com.mx";
const COMPANY_SENDER = "Justnet <contacto@jusnet.com.mx>";
const BANNER_URL = "https://jusnet.com.mx/email.png";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      locale,
      amount,
      reference,
      customer,
      items,
      total,
    } = body;

    const t = await getTranslations({ locale, namespace: "Emails.checkoutEmail" });

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: t("invalidAmount") },
        { status: 400 }
      );
    }

    if (!customer?.email) {
      return NextResponse.json(
        { error: t("customerEmailRequired") },
        { status: 400 }
      );
    }

    const customerName = customer.nombre;

    const itemsHtml = (items ?? [])
      .map(
        (item: any) => `
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 600;">${item.nombre}</p>
              <p style="margin: 4px 0 0; color: #6b7280; font-size: 12px;">${t("digitalService")}</p>
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb; text-align: center; color: #4b5563; font-size: 14px;">
              ${item.cantidad ?? 1}
            </td>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #111827; font-size: 14px; font-weight: 700;">
              ${item.precioFormateado}
            </td>
          </tr>
        `
      )
      .join("");

    /**
     * EMAIL DE CONFIRMACIÓN PARA EL CLIENTE (ACENTOS EN NARANJA)
     */
    await resend.emails.send({
      from: COMPANY_SENDER,
      to: [customer.email],
      subject: t("confirmationSubject", { reference }),
      html: `
        <div style="font-family: system-ui, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <img src="${BANNER_URL}" alt="Justnet Banner" style="width: 100%; height: auto; display: block;" />

            <div style="padding: 32px;">
              <h1 style="margin: 0 0 16px; color: #111827; font-size: 24px;">${t("confirmationTitle")}</h1>
              <p style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                ${t("confirmationGreeting", { customerName, reference })}
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <thead>
                  <tr>
                    <th align="left" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #f3f4f6;">${t("tableHeaderService")}</th>
                    <th align="center" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #f3f4f6;">${t("tableHeaderQuantity")}</th>
                    <th align="right" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #f3f4f6;">${t("tableHeaderPrice")}</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" style="padding-top: 20px; text-align: right; color: #4b5563; font-weight: 600;">${t("totalPaid")}</td>
                    <td style="padding-top: 20px; text-align: right; color: #ea580c; font-size: 20px; font-weight: 800;">${total}</td>
                  </tr>
                </tfoot>
              </table>

              <div style="background: #fff7ed; border-left: 4px solid #ea580c; padding: 20px; border-radius: 4px;">
                <h3 style="margin: 0 0 8px; color: #9a3412; font-size: 16px;">${t("nextStepsTitle")}</h3>
                <p style="margin: 0; color: #c2410c; font-size: 14px; line-height: 1.5;">
                  ${t("nextStepsContent")}
                </p>
              </div>
            </div>

            <div style="text-align: center; padding: 20px; background: #fafafa; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 13px;">${t("footerText")}</p>
            </div>

          </div>
        </div>
      `,
    });

    /**
     * EMAIL DE NOTIFICACIÓN PARA EL NEGOCIO (ACENTOS EN NEGRO)
     */
    await resend.emails.send({
      from: COMPANY_SENDER,
      to: [COMPANY_EMAIL],
      subject: t("businessSubject", { reference }),
      html: `
        <div style="font-family: system-ui, sans-serif; background-color: #f3f4f6; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            
            <img src="${BANNER_URL}" alt="Justnet Banner" style="width: 100%; height: auto; display: block;" />

            <div style="padding: 32px;">
              <p style="margin: 0 0 8px; color: #000000; font-size: 12px; font-weight: 800; text-transform: uppercase;">${t("businessHeaderTag")}</p>
              <h1 style="margin: 0 0 24px; color: #000000; font-size: 28px;">${reference}</h1>

              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 12px; color: #000000; font-size: 12px; font-weight: bold; text-transform: uppercase;">${t("clientDataTitle")}</p>
                <p style="margin: 4px 0; color: #111827; font-size: 15px;"><strong>${t("labelName")}</strong> ${customer.nombre}</p>
                <p style="margin: 4px 0; color: #111827; font-size: 15px;"><strong>${t("labelEmail")}</strong> ${customer.email}</p>
                <p style="margin: 4px 0; color: #111827; font-size: 15px;"><strong>${t("labelPhone")}</strong> ${customer.telefono || t("notProvided")}</p>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th align="left" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">${t("tableHeaderService")}</th>
                    <th align="center" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">${t("tableHeaderQuantity")}</th>
                    <th align="right" style="padding-bottom: 12px; color: #6b7280; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">${t("tableHeaderPrice")}</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" style="padding-top: 20px; text-align: right; color: #4b5563; font-weight: 600;">${t("totalToReceive")}</td>
                    <td style="padding-top: 20px; text-align: right; color: #000000; font-size: 20px; font-weight: 900;">${total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: t("successMessage"),
    });

  } catch (error) {
    console.error("CHECKOUT EMAIL ERROR:", error);

    return NextResponse.json(
      {
        error: "Error al enviar los emails",
      },
      {
        status: 500,
      }
    );
  }
}