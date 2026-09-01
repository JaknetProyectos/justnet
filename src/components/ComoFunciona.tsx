"use client";

import {
  Database,
  Sparkles,
  LayoutDashboard,
  LifeBuoy,
} from "lucide-react";

import { useTranslations } from "next-intl";

const pasos = [
  {
    numero: "01",
    titulo: "connectDataTitle",
    descripcion: "connectDataDescription",
    icon: Database,
  },
  {
    numero: "02",
    titulo: "cleanDataTitle",
    descripcion: "cleanDataDescription",
    icon: Sparkles,
  },
  {
    numero: "03",
    titulo: "buildDashboardsTitle",
    descripcion: "buildDashboardsDescription",
    icon: LayoutDashboard,
  },
  {
    numero: "04",
    titulo: "deliverySupportTitle",
    descripcion: "deliverySupportDescription",
    icon: LifeBuoy,
  },
];

export default function ComoFunciona() {
  const t = useTranslations("home.process");

  return (
    <section className="relative py-24 sm:py-32 bg-amber-400 text-stone-900 overflow-hidden">
      {/* Sutiles orbes decorativos para dar profundidad a la lava/corteza */}
      <div className="absolute -top-20 right-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/10 border border-stone-900/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-950 leading-tight mb-6">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h2>

          <p className="text-lg text-stone-800 font-medium leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pasos.map((paso) => {
            const Icon = paso.icon;

            return (
              <div
                key={paso.numero}
                className="group relative bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-[36px] p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-stone-950/30"
              >
                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-[20px] bg-orange-500 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.25]" />
                    </div>

                    <span className="text-4xl font-black text-stone-700 group-hover:text-orange-400 transition-colors duration-300">
                      {paso.numero}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black tracking-tight text-stone-100 leading-tight mb-4">
                    {t(paso.titulo)}
                  </h3>

                  <p className="text-stone-300 leading-relaxed text-sm">
                    {t(paso.descripcion)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}