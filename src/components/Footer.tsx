import { Link } from "@/i18n/routing";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";
import Logo from "./Logo";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const legalLinks = [
    {
      href: "/legal/privacidad",
      label: t("privacyPolicy"),
    },
    {
      href: "/legal/terminos",
      label: t("termsConditions"),
    },
    {
      href: "/legal/reembolsos",
      label: t("refundPolicy"),
    },
  ];

  const navigation = [
    {
      href: "/",
      label: t("home"),
    },
    {
      href: "/nosotros",
      label: t("about"),
    },
    {
      href: "/servicios",
      label: t("services"),
    },
    {
      href: "/contacto",
      label: t("contact"),
    },
  ];

  return (
    <footer className="bg-stone-950 text-stone-100 border-t border-stone-900 relative overflow-hidden">
      {/* Halo sutil de fondo para profundidad */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex mb-8 hover:opacity-90 transition-opacity"
            >
              <Logo className="h-14" />
            </Link>

            <p className="text-stone-400 leading-relaxed max-w-md mb-8">
              {t("description")}
            </p>

            {/* Contact */}
            <div className="space-y-4">
              <Link
                href="tel:+5215552445674"
                className="group flex items-center gap-4 text-stone-300 hover:text-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-stone-850 transition-all">
                  <Phone className="w-5 h-5 text-stone-400 group-hover:text-orange-400 transition-colors" />
                </div>
                <span className="font-medium">+52 1 55 5244 5674</span>
              </Link>

              <Link
                href="mailto:contacto@jusnet.com.mx"
                className="group flex items-center gap-4 text-stone-300 hover:text-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-stone-850 transition-all">
                  <Mail className="w-5 h-5 text-stone-400 group-hover:text-orange-400 transition-colors" />
                </div>
                <span className="font-medium">contacto@jusnet.com.mx</span>
              </Link>

              <div className="flex items-start gap-4 text-stone-300">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-stone-400" />
                </div>
                <p className="leading-relaxed text-stone-400">{t("address")}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-stone-800 mb-8">
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                {t("navigation")}
              </span>
            </div>

            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-stone-100 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-stone-800 mb-8">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                {t("legal")}
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-stone-100 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Payments */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-stone-800 flex items-center justify-center border border-stone-700/50">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                </div>

                <div>
                  <p className="font-bold text-stone-100">
                    {t("securePayments")}
                  </p>
                  <p className="text-xs text-stone-400">
                    Visa & Mastercard
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3 opacity-90">
                <Image
                  src="/cards.png"
                  width={150}
                  height={30}
                  alt="Visa & Mastercard"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-stone-500 text-sm text-center md:text-left">
            {t("copyright")}
          </p>

          <p className="text-stone-500 text-sm">
            {t("bottomText")}
          </p>
        </div>
      </div>
    </footer>
  );
}