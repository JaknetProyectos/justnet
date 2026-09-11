"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalStyle from "@/components/LegalStyle";

function LegalEs() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <section>
                <h1>Política de devoluciones y reembolsos</h1>
                <p>BOTTLENECK CART, S.A. DE C.V. (JUSTNET)</p>

                <h2>1. DISPOSICIONES GENERALES</h2>
                <p>La presente Política regula las condiciones para solicitudes de cancelación y reembolso aplicables a los servicios, productos y plataformas SaaS proporcionados por BOTTLENECK CART, S.A. DE C.V. (“JUSTNET” o “la Empresa”), de conformidad con los Términos y Condiciones aceptados por el Usuario.</p>
                <p>Al contratar, utilizar o acceder a los servicios de JUSTNET, el Usuario reconoce haber leído y aceptado esta Política.</p>

                <h2>2. SOBRE CANCELACIONES</h2>
                <p>2.1. Solicitud de Cancelación</p>
                <p>Las solicitudes de cancelación deberán enviarse por escrito al correo: contacto@jusnet.com.mx</p>
                <p>La solicitud deberá incluir:</p>
                <ul>
                    <li>Nombre del Usuario</li>
                    <li>Servicio o paquete contratado</li>
                    <li>Fecha de contratación</li>
                    <li>Motivo de la cancelación</li>
                </ul>
                <p>JUSTNET analizará cada solicitud caso por caso y comunicará su resolución al Usuario.</p>
                <p>2.2. Cancelaciones de Servicios Recurrentes</p>
                <p>En servicios con modalidad de suscripción o pagos recurrentes:</p>
                <ul>
                    <li>La cancelación no exime al Usuario de cubrir pagos previamente generados o facturados.</li>
                    <li>Para evitar el siguiente ciclo de cobro, la cancelación deberá solicitarse antes de la fecha de renovación publicada o indicada en la cotización.</li>
                </ul>
                <p>2.3. Efecto de la Cancelación</p>
                <p>Al confirmarse la cancelación:</p>
                <ul>
                    <li>Se deshabilitará el acceso del Usuario a la plataforma o servicio.</li>
                    <li>No se conservarán integraciones, automatizaciones, dashboards o configuraciones, salvo que exista acuerdo por escrito para su resguardo.</li>
                </ul>

                <h2>3. REEMBOLSOS</h2>
                <p>3.1. Política General</p>
                <p>Como regla general, JUSTNET no ofrece reembolsos, salvo que:</p>
                <ul>
                    <li>El servicio no haya sido provisto conforme a lo ofertado, y</li>
                    <li>Tras la evaluación interna de JUSTNET, se determine que el Usuario tiene derecho al reembolso.</li>
                </ul>
                <p>El reembolso no procede por:</p>
                <ul>
                    <li>Errores del Usuario al proporcionar información.</li>
                    <li>Falta de interés, tiempo, uso o desconocimiento del funcionamiento de la plataforma.</li>
                    <li>Problemas originados por servicios o proveedores externos ajenos a JUSTNET.</li>
                    <li>Falta de resultados derivados de mal uso, uso incompleto o interpretación de datos, dashboards o predicciones.</li>
                </ul>
                <p>3.2. Servicios Personalizados o a la Medida</p>
                <p>No son reembolsables:</p>
                <ul>
                    <li>Desarrollo de dashboards personalizados.</li>
                    <li>Modelos predictivos hechos a la medida.</li>
                    <li>Consultorías, integraciones o automatizaciones personalizadas.</li>
                    <li>Diseño, configuración o parametrización específica solicitada por el Usuario.</li>
                </ul>
                <p>3.3. Servicios de Suscripción</p>
                <p>No se realizan reembolsos parciales o proporcionales por meses, semanas o días no utilizados.</p>
                <p>Si el Usuario cancela antes de finalizar el periodo contratado, el acceso se suspenderá, pero no se realizará devolución alguna.</p>

                <h2>4. PROCEDIMIENTO DE REEMBOLSO (CUANDO PROCEDA)</h2>
                <p>En los casos excepcionales donde JUSTNET determine procedencia de reembolso:</p>
                <ol>
                    <li>La Empresa notificará por correo la aprobación del reembolso.</li>
                    <li>El proceso se realizará mediante el mismo método de pago utilizado.</li>
                    <li>El tiempo para ver reflejado el reembolso dependerá del banco o institución emisora de la tarjeta.</li>
                    <li>JUSTNET únicamente procesa la devolución; el reflejo del dinero en la cuenta del Usuario está sujeto a los tiempos de la institución bancaria.</li>
                </ol>

                <h2>5. TIEMPOS DE PROCESAMIENTO</h2>
                <ul>
                    <li>JUSTNET confirmará la recepción de la solicitud dentro de 24 horas hábiles.</li>
                    <li>Una vez aprobada la solicitud, el reembolso será procesado en un plazo de 15 a 30 días hábiles, dependiendo de los tiempos de la institución bancaria.</li>
                </ul>

                <h2>6. EXCEPCIÓN POR FALLAS EN EL SERVICIO</h2>
                <p>Si se presenta una falla técnica atribuible directamente a JUSTNET que imposibilite el uso del servicio contratado por un periodo prolongado, la Empresa podrá otorgar, a su criterio:</p>
                <ul>
                    <li>Un ajuste proporcional en la renovación.</li>
                    <li>Una nota de crédito para servicios futuros.</li>
                    <li>Un reembolso parcial o total, únicamente en casos extraordinarios.</li>
                </ul>

                <h2>7. CONTACTO</h2>
                <p>Para cualquier duda o solicitud relacionada con esta Política:</p>
                <ul>
                    <li>contacto@jusnet.com.mx</li>
                    <li>jusnet.com.mx</li>
                </ul>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <section>
                <h1>Returns and Refunds Policy</h1>
                <p>BOTTLENECK CART, S.A. DE C.V. (JUSTNET)</p>

                <h2>1. GENERAL PROVISIONS</h2>
                <p>This Policy regulates the conditions for cancellation and refund requests applicable to the services, products and SaaS platforms provided by BOTTLENECK CART, S.A. DE C.V. (“JUSTNET” or “the Company”), in accordance with the Terms and Conditions accepted by the User.</p>
                <p>By contracting, using or accessing JUSTNET's services, the User acknowledges having read and accepted this Policy.</p>

                <h2>2. ABOUT CANCELLATIONS</h2>
                <p>2.1. Cancellation Request</p>
                <p>Cancellation requests must be sent in writing to the email: contacto@jusnet.com.mx</p>
                <p>The request must include:</p>
                <ul>
                    <li>User's name</li>
                    <li>Service or package contracted</li>
                    <li>Date of contracting</li>
                    <li>Reason for cancellation</li>
                </ul>
                <p>JUSTNET will analyze each request on a case-by-case basis and will communicate its resolution to the User.</p>
                <p>2.2. Cancellations of Recurring Services</p>
                <p>In services with a subscription or recurring payment modality:</p>
                <ul>
                    <li>Cancellation does not exempt the User from covering payments previously generated or invoiced.</li>
                    <li>To avoid the next billing cycle, cancellation must be requested before the renewal date published or indicated in the quotation.</li>
                </ul>
                <p>2.3. Effect of Cancellation</p>
                <p>Upon confirmation of the cancellation:</p>
                <ul>
                    <li>The User's access to the platform or service will be disabled.</li>
                    <li>Integrations, automations, dashboards or configurations will not be retained, unless there is a written agreement for their safekeeping.</li>
                </ul>

                <h2>3. REFUNDS</h2>
                <p>3.1. General Policy</p>
                <p>As a general rule, JUSTNET does not offer refunds, unless:</p>
                <ul>
                    <li>The service has not been provided in accordance with what was offered, and</li>
                    <li>After JUSTNET's internal evaluation, it is determined that the User is entitled to a refund.</li>
                </ul>
                <p>Refunds do not apply for:</p>
                <ul>
                    <li>Errors by the User in providing information.</li>
                    <li>Lack of interest, time, use or knowledge of the platform's operation.</li>
                    <li>Problems originating from services or providers external to JUSTNET.</li>
                    <li>Lack of results derived from misuse, incomplete use or interpretation of data, dashboards or predictions.</li>
                </ul>
                <p>3.2. Personalized or Custom Services</p>
                <p>The following are not refundable:</p>
                <ul>
                    <li>Development of personalized dashboards.</li>
                    <li>Custom-made predictive models.</li>
                    <li>Personalized consulting, integrations or automations.</li>
                    <li>Specific design, configuration or parameterization requested by the User.</li>
                </ul>
                <p>3.3. Subscription Services</p>
                <p>No partial or proportional refunds are made for unused months, weeks or days.</p>
                <p>If the User cancels before the end of the contracted period, access will be suspended, but no refund will be made.</p>

                <h2>4. REFUND PROCEDURE (WHEN APPLICABLE)</h2>
                <p>In exceptional cases where JUSTNET determines that a refund is appropriate:</p>
                <ol>
                    <li>The Company will notify the refund approval by email.</li>
                    <li>The process will be carried out using the same payment method used.</li>
                    <li>The time for the refund to be reflected will depend on the bank or card-issuing institution.</li>
                    <li>JUSTNET only processes the refund; the reflection of the money in the User's account is subject to the timelines of the banking institution.</li>
                </ol>

                <h2>5. PROCESSING TIMES</h2>
                <ul>
                    <li>JUSTNET will confirm receipt of the request within 24 business hours.</li>
                    <li>Once the request is approved, the refund will be processed within 15 to 30 business days, depending on the timelines of the banking institution.</li>
                </ul>

                <h2>6. EXCEPTION FOR SERVICE FAILURES</h2>
                <p>If there is a technical failure directly attributable to JUSTNET that makes it impossible to use the contracted service for a prolonged period, the Company may grant, at its discretion:</p>
                <ul>
                    <li>A proportional adjustment in the renewal.</li>
                    <li>A credit note for future services.</li>
                    <li>A partial or total refund, only in extraordinary cases.</li>
                </ul>

                <h2>7. CONTACT</h2>
                <p>For any question or request related to this Policy:</p>
                <ul>
                    <li>contacto@jusnet.com.mx</li>
                    <li>jusnet.com.mx</li>
                </ul>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col text-white bg-[#161619]">
            <Header />
            <main className="flex-grow container mt-20 mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}