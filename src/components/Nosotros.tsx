import {
  BarChart3,
  Database,
  BrainCircuit,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function Nosotros() {
  const t = useTranslations("homeAbout");

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 py-24"
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-orange-700/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/80 border border-zinc-900/60 mb-8 backdrop-blur-md">
              <BrainCircuit className="w-4 h-4 text-amber-400" />

              <span className="text-sm font-semibold text-amber-300">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 leading-tight mb-6">
              {t.rich("title", {
                br: () => <br />,
              })}
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-900 font-medium leading-relaxed max-w-xl mb-10">
              {t("description")}
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-3xl border border-zinc-950/10 bg-zinc-950/80 text-zinc-100 backdrop-blur-md shadow-xl transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-md">
                  <Database className="w-5 h-5 text-zinc-950" />
                </div>

                <div>
                  <h3 className="font-bold text-amber-400 mb-1">
                    {t("features.integration.title")}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {t("features.integration.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl border border-zinc-950/10 bg-zinc-950/80 text-zinc-100 backdrop-blur-md shadow-xl transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-md">
                  <BarChart3 className="w-5 h-5 text-zinc-950" />
                </div>

                <div>
                  <h3 className="font-bold text-amber-400 mb-1">
                    {t("features.visualization.title")}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {t("features.visualization.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-zinc-950/90 border border-zinc-900 rounded-[36px] p-4 shadow-2xl backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("imageAlt")}
                className="w-full h-[500px] object-cover rounded-[28px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 rounded-3xl px-6 py-5 shadow-2xl">
              <p className="text-sm text-amber-400 font-medium mb-1">
                {t("floatingCard.label")}
              </p>

              <h3 className="text-2xl font-black text-zinc-100">
                {t("floatingCard.title")}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}