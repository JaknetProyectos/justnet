import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NecesitasAyuda() {
  const t = useTranslations("home.helpSection");

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-amber-400 to-stone-100 text-stone-900 overflow-hidden"
    >
      {/* Halo de luz cálida simulando la cercanía al núcleo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-300/30 via-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-stone-50/90 backdrop-blur-xl border border-stone-200/80 rounded-[44px] overflow-hidden shadow-2xl shadow-stone-300/40">
          <div className="grid lg:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 sm:p-14 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/80 mb-8 w-fit shadow-xs">
                <Mail className="w-4 h-4 text-orange-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                  {t("badge")}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight mb-6">
                {t.rich("title", {
                  br: () => <br />,
                })}
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-10">
                {t("description")}
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Link */}
                <Link
                  href="tel:+5215552445674"
                  className="group flex items-center gap-4 p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 group-hover:bg-orange-500 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Phone className="w-6 h-6 text-stone-700 group-hover:text-stone-950 group-hover:-rotate-12 transition-transform duration-300" />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-0.5">
                      {t("phoneLabel")}
                    </p>
                    <p className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                      +52 1 55 5244 5674
                    </p>
                  </div>
                </Link>

                {/* Email Link */}
                <Link
                  href="mailto:contacto@jusnet.com.mx"
                  className="group flex items-center gap-4 p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 group-hover:bg-orange-500 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Mail className="w-6 h-6 text-stone-700 group-hover:text-stone-950 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-0.5">
                      {t("emailLabel")}
                    </p>
                    <p className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                      contacto@jusnet.com.mx
                    </p>
                  </div>
                </Link>

                {/* Office Info */}
                <div className="group flex items-start gap-4 p-5 rounded-3xl bg-white border border-stone-200/80 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 group-hover:bg-orange-500 flex items-center justify-center shrink-0 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-stone-700 group-hover:text-stone-950 group-hover:bounce transition-transform duration-300" />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-0.5">
                      {t("officeLabel")}
                    </p>
                    <p className="text-stone-800 font-medium leading-relaxed text-sm">
                      {t("officeAddress")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Image & Floating Card) */}
            <div className="relative min-h-[440px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&"
                alt={t("imageAlt")}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />

              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-stone-950/40 backdrop-contrast-125" />

              {/* Floating Expressive Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-stone-900/90 backdrop-blur-md rounded-[32px] p-6 sm:p-8 border border-stone-800 shadow-2xl">
                <h3 className="text-2xl font-black tracking-tight text-stone-100 mb-3">
                  {t.rich("floatingCardTitle", {
                    br: () => <br />,
                  })}
                </h3>

                <p className="text-stone-300 leading-relaxed text-sm mb-6">
                  {t("floatingCardDescription")}
                </p>

                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-stone-950 font-black transition-all duration-300 shadow-lg shadow-orange-600/20"
                >
                  {t("button")}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}