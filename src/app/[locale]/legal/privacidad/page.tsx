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
                <h1>Política de privacidad</h1>
                <p>BOTTLENECK CART, S.A. DE C.V. (JUSTNET)</p>

                <h2>1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE</h2>
                <p>BOTTLENECK CART, S.A. DE C.V. (“JUSTNET”, “la Empresa” o “el Responsable”), con domicilio en Avenida Homero No. 205, Piso 10, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México, es responsable del tratamiento, uso y protección de los datos personales que recaba.</p>
                <p>Sitio web: jusnet.com.mx</p>
                <p>Correo de contacto: contacto@jusnet.com.mx</p>

                <h2>2. DATOS PERSONALES QUE RECABAMOS</h2>
                <p>JUSTNET podrá recopilar las siguientes categorías de datos personales:</p>
                <p>a) Datos de identificación y contacto</p>
                <ul>
                    <li>Nombre, correo electrónico, teléfono, domicilio</li>
                </ul>
                <p>b) Datos de facturación y financieros</p>
                <ul>
                    <li>RFC, razón social, domicilio fiscal, método de pago (sin almacenar datos sensibles de tarjetas).</li>
                </ul>
                <p>c) Datos técnicos y analíticos</p>
                <ul>
                    <li>Dirección IP, cookies, identificadores únicos, logs de actividad, estadísticas de uso.</li>
                </ul>
                <p>d) Información que el Usuario ingresa a los servicios SaaS</p>
                <p>Incluyendo pero no limitado a:</p>
                <ul>
                    <li>Bases de datos proporcionadas por el Usuario.</li>
                    <li>Información contenida en dashboards, encuestas, métricas, predicciones, modelos y archivos cargados a la plataforma.</li>
                </ul>
                <p>JUSTNET no recopila datos personales sensibles, salvo que el Usuario los cargue voluntariamente en la plataforma como parte del uso de los servicios.</p>

                <h2>3. FINALIDADES DEL TRATAMIENTO</h2>
                <p>Los datos personales serán utilizados para las siguientes:</p>
                <p>Finalidades Primarias (necesarias):</p>
                <ul>
                    <li>Proveer los servicios SaaS, BI, analítica, encuestas, dashboards y consultoría contratados.</li>
                    <li>Crear, administrar y gestionar cuentas de usuario.</li>
                    <li>Brindar soporte técnico, mantenimiento, actualizaciones y servicio al cliente.</li>
                    <li>Procesar pagos, facturación y comprobantes fiscales.</li>
                    <li>Configurar integraciones, automatizaciones y herramientas digitales ofrecidas por JUSTNET.</li>
                    <li>Contactar al Usuario para seguimiento, notificaciones, cambios, vencimientos y renovaciones.</li>
                    <li>Garantizar la seguridad, integridad y funcionamiento adecuado de la plataforma.</li>
                </ul>
                <p>Finalidades Secundarias (opcionales):</p>
                <ul>
                    <li>Enviar comunicaciones comerciales, newsletters o información promocional.</li>
                    <li>Generar análisis estadísticos y estudios internos de mejoras del servicio.</li>
                    <li>Realizar encuestas de satisfacción.</li>
                </ul>
                <p>El Usuario podrá negarse o revocar su consentimiento respecto de las finalidades secundarias enviando un correo a contacto@jusnet.com.mx.</p>

                <h2>4. TRANSFERENCIA DE DATOS PERSONALES</h2>
                <p>JUSTNET puede compartir datos personales únicamente en los siguientes casos:</p>
                <p>a) Transferencias necesarias sin consentimiento</p>
                <ul>
                    <li>Autoridades competentes cuando sea requerido legalmente.</li>
                    <li>Proveedores de servicios tecnológicos (hosting, procesamiento de datos, seguridad, pagos) únicamente para cumplir las finalidades del servicio.</li>
                    <li>Aliados comerciales estrictamente para la ejecución de los servicios contratados.</li>
                </ul>
                <p>b) Transferencias con consentimiento</p>
                <ul>
                    <li>En caso de enviar materiales comerciales o promociones conjuntas con terceros (previo consentimiento del Usuario).</li>
                </ul>
                <p>En todos los casos, JUSTNET exige a terceros medidas de seguridad equivalentes a las previstas por la ley mexicana.</p>

                <h2>5. USO DE COOKIES Y TECNOLOGÍAS SIMILARES</h2>
                <p>Nuestro sitio web utiliza:</p>
                <ul>
                    <li>Cookies</li>
                    <li>Web beacons</li>
                    <li>Herramientas de análisis (como Google Analytics)</li>
                </ul>
                <p>Esto con fines de:</p>
                <ul>
                    <li>Mejorar la experiencia del usuario.</li>
                    <li>Analizar tráfico y rendimiento.</li>
                    <li>Recordar configuraciones y preferencias.</li>
                </ul>
                <p>El Usuario puede deshabilitar las cookies desde su navegador, aunque esto podría limitar el funcionamiento de algunas funciones del Sitio o de la plataforma SaaS.</p>

                <h2>6. MEDIDAS DE SEGURIDAD</h2>
                <p>JUSTNET implementa medidas administrativas, técnicas y físicas para proteger los datos personales contra:</p>
                <ul>
                    <li>Acceso no autorizado</li>
                    <li>Pérdida</li>
                    <li>Uso indebido</li>
                    <li>Alteración o destrucción</li>
                </ul>
                <p>Incluyendo cifrado, controles de acceso, firewalls, monitoreo, auditorías y políticas internas de seguridad.</p>

                <h2>7. DERECHOS ARCO Y REVOCACIÓN DEL CONSENTIMIENTO</h2>
                <p>El Usuario puede ejercer en cualquier momento sus derechos:</p>
                <ul>
                    <li>Acceso: conocer los datos que se tienen.</li>
                    <li>Rectificación: corregir datos incorrectos.</li>
                    <li>Cancelación: solicitar que se eliminen los datos cuando sea legalmente procedente.</li>
                    <li>Oposición: detener el uso de los datos para ciertos fines.</li>
                </ul>
                <p>Así como revocar su consentimiento para el tratamiento.</p>
                <p>Para ejercerlos, deberá enviar un correo a: contacto@jusnet.com.mx</p>
                <p>Incluyendo:</p>
                <ol>
                    <li>Nombre completo</li>
                    <li>Descripción clara del derecho que desea ejercer</li>
                    <li>Identificación oficial</li>
                    <li>Correo asociado a su cuenta</li>
                </ol>
                <p>JUSTNET responderá conforme a los plazos establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>

                <h2>8. CONSERVACIÓN DE LOS DATOS</h2>
                <p>Los datos se conservarán únicamente por el tiempo necesario para:</p>
                <ul>
                    <li>Cumplir las finalidades del servicio,</li>
                    <li>Cumplir obligaciones legales,</li>
                    <li>Mantener registros operativos por un periodo razonable.</li>
                </ul>
                <p>Una vez concluido el plazo, los datos serán eliminados o anonimizados.</p>

                <h2>9. CAMBIOS AL AVISO DE PRIVACIDAD</h2>
                <p>JUSTNET podrá actualizar este Aviso de Privacidad en cualquier momento. Los cambios serán publicados en: jusnet.com.mx</p>
                <p>El uso continuo de los Servicios después de la publicación implica la aceptación de las modificaciones.</p>

                <h2>10. ACEPTACIÓN</h2>
                <p>Al proporcionar sus datos, navegar en el sitio, contratar o utilizar los servicios de JUSTNET, el Usuario reconoce que ha leído, entendido y aceptado el presente Aviso de Privacidad.</p>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <LegalStyle />

            <section>
                <h1>Privacy Policy</h1>
                <p>BOTTLENECK CART, S.A. DE C.V. (JUSTNET)</p>

                <h2>1. IDENTITY AND DOMICILE OF THE CONTROLLER</h2>
                <p>BOTTLENECK CART, S.A. DE C.V. (“JUSTNET”, “the Company” or “the Controller”), with domicile at Avenida Homero No. 205, Piso 10, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México, is responsible for the processing, use and protection of the personal data it collects.</p>
                <p>Website: jusnet.com.mx</p>
                <p>Contact email: contacto@jusnet.com.mx</p>

                <h2>2. PERSONAL DATA WE COLLECT</h2>
                <p>JUSTNET may collect the following categories of personal data:</p>
                <p>a) Identification and contact data</p>
                <ul>
                    <li>Name, email address, telephone number, domicile</li>
                </ul>
                <p>b) Billing and financial data</p>
                <ul>
                    <li>RFC, legal name, fiscal domicile, payment method (without storing sensitive card data).</li>
                </ul>
                <p>c) Technical and analytical data</p>
                <ul>
                    <li>IP address, cookies, unique identifiers, activity logs, usage statistics.</li>
                </ul>
                <p>d) Information that the User enters into the SaaS services</p>
                <p>Including but not limited to:</p>
                <ul>
                    <li>Databases provided by the User.</li>
                    <li>Information contained in dashboards, surveys, metrics, predictions, models and files uploaded to the platform.</li>
                </ul>
                <p>JUSTNET does not collect sensitive personal data, unless the User voluntarily uploads it to the platform as part of the use of the services.</p>

                <h2>3. PURPOSES OF THE PROCESSING</h2>
                <p>The personal data will be used for the following:</p>
                <p>Primary Purposes (necessary):</p>
                <ul>
                    <li>Provide the contracted SaaS, BI, analytics, surveys, dashboards and consulting services.</li>
                    <li>Create, administer and manage user accounts.</li>
                    <li>Provide technical support, maintenance, updates and customer service.</li>
                    <li>Process payments, billing and fiscal receipts.</li>
                    <li>Configure integrations, automations and digital tools offered by JUSTNET.</li>
                    <li>Contact the User for follow-up, notifications, changes, expirations and renewals.</li>
                    <li>Guarantee the security, integrity and proper functioning of the platform.</li>
                </ul>
                <p>Secondary Purposes (optional):</p>
                <ul>
                    <li>Send commercial communications, newsletters or promotional information.</li>
                    <li>Generate statistical analyses and internal studies for service improvements.</li>
                    <li>Conduct satisfaction surveys.</li>
                </ul>
                <p>The User may refuse or revoke their consent regarding the secondary purposes by sending an email to contacto@jusnet.com.mx.</p>

                <h2>4. TRANSFER OF PERSONAL DATA</h2>
                <p>JUSTNET may share personal data only in the following cases:</p>
                <p>a) Transfers necessary without consent</p>
                <ul>
                    <li>Competent authorities when legally required.</li>
                    <li>Technology service providers (hosting, data processing, security, payments) solely to fulfill the purposes of the service.</li>
                    <li>Commercial partners strictly for the execution of the contracted services.</li>
                </ul>
                <p>b) Transfers with consent</p>
                <ul>
                    <li>In the case of sending commercial materials or joint promotions with third parties (with prior consent of the User).</li>
                </ul>
                <p>In all cases, JUSTNET requires third parties to have security measures equivalent to those provided by Mexican law.</p>

                <h2>5. USE OF COOKIES AND SIMILAR TECHNOLOGIES</h2>
                <p>Our website uses:</p>
                <ul>
                    <li>Cookies</li>
                    <li>Web beacons</li>
                    <li>Analytics tools (such as Google Analytics)</li>
                </ul>
                <p>This for the purposes of:</p>
                <ul>
                    <li>Improving the user experience.</li>
                    <li>Analyzing traffic and performance.</li>
                    <li>Remembering configurations and preferences.</li>
                </ul>
                <p>The User may disable cookies from their browser, although this could limit the functioning of some functions of the Site or of the SaaS platform.</p>

                <h2>6. SECURITY MEASURES</h2>
                <p>JUSTNET implements administrative, technical and physical measures to protect personal data against:</p>
                <ul>
                    <li>Unauthorized access</li>
                    <li>Loss</li>
                    <li>Misuse</li>
                    <li>Alteration or destruction</li>
                </ul>
                <p>Including encryption, access controls, firewalls, monitoring, audits and internal security policies.</p>

                <h2>7. ARCO RIGHTS AND REVOCATION OF CONSENT</h2>
                <p>The User may exercise at any time their rights:</p>
                <ul>
                    <li>Access: know the data that is held.</li>
                    <li>Rectification: correct incorrect data.</li>
                    <li>Cancellation: request that the data be deleted when legally appropriate.</li>
                    <li>Opposition: stop the use of the data for certain purposes.</li>
                </ul>
                <p>As well as revoke their consent for the processing.</p>
                <p>To exercise them, they must send an email to: contacto@jusnet.com.mx</p>
                <p>Including:</p>
                <ol>
                    <li>Full name</li>
                    <li>Clear description of the right they wish to exercise</li>
                    <li>Official identification</li>
                    <li>Email associated with their account</li>
                </ol>
                <p>JUSTNET will respond in accordance with the deadlines established by the Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>

                <h2>8. RETENTION OF DATA</h2>
                <p>The data will be retained only for the time necessary to:</p>
                <ul>
                    <li>Fulfill the purposes of the service,</li>
                    <li>Comply with legal obligations,</li>
                    <li>Maintain operational records for a reasonable period.</li>
                </ul>
                <p>Once the period has concluded, the data will be deleted or anonymized.</p>

                <h2>9. CHANGES TO THE PRIVACY NOTICE</h2>
                <p>JUSTNET may update this Privacy Notice at any time. The changes will be published at: jusnet.com.mx</p>
                <p>The continued use of the Services after publication implies acceptance of the modifications.</p>

                <h2>10. ACCEPTANCE</h2>
                <p>By providing their data, browsing the site, contracting or using JUSTNET's services, the User acknowledges that they have read, understood and accepted this Privacy Notice.</p>
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