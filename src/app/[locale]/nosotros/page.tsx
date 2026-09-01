import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { getTranslations } from "next-intl/server";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export async function generateMetadata() {
  const t = await getTranslations("about.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function NosotrosPage() {
  const t = await getTranslations("about");

  const pilares = [
    {
      icon: LayoutDashboard,
      title: t("pillars.items.dashboard.title"),
      description: t("pillars.items.dashboard.description"),
    },
    {
      icon: Database,
      title: t("pillars.items.data.title"),
      description: t("pillars.items.data.description"),
    },
    {
      icon: BrainCircuit,
      title: t("pillars.items.analysis.title"),
      description: t("pillars.items.analysis.description"),
    },
    {
      icon: ShieldCheck,
      title: t("pillars.items.security.title"),
      description: t("pillars.items.security.description"),
    },
  ];

  return (
    <main className="min-h-screen bg-orange-600">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/90 backdrop-blur-md mb-5 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-400" />

                <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="mt-4 text-lg text-stone-900 font-medium leading-relaxed max-w-2xl">
                {t("hero.description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-stone-900 border border-stone-800 shadow-md">
                  <BarChart3 className="w-5 h-5 text-orange-400" />

                  <span className="font-bold text-sm text-stone-100">
                    {t("hero.tags.bi")}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-stone-900 border border-stone-800 shadow-md">
                  <Database className="w-5 h-5 text-orange-400" />

                  <span className="font-bold text-sm text-stone-100">
                    {t("hero.tags.integration")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="bg-stone-950 border border-stone-800 rounded-[32px] p-3 sm:p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={t("hero.imageAlt")}
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-[24px] grayscale opacity-90"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 bg-stone-900 text-stone-100 rounded-3xl p-5 border-4 border-orange-600 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      {t("hero.cardSubtitle")}
                    </p>

                    <p className="font-black text-base text-stone-100">
                      {t("hero.cardTitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-stone-950 border border-stone-800 rounded-[32px] p-7 sm:p-10 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-orange-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-stone-100 mb-4">
              {t("approach.title")}
            </h2>

            <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
              {t("approach.description")}
            </p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-[32px] p-7 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-orange-400" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-100 mb-4">
                {t("commitment.title")}
              </h2>

              <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
                {t("commitment.description")}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t("commitment.highlight")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950">
              {t("pillars.title")}
            </h2>

            <p className="mt-3 text-stone-900 font-medium max-w-2xl mx-auto text-base">
              {t("pillars.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {pilares.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-stone-950 border border-stone-800 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>

                    <h3 className="text-xl font-black text-stone-100 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}