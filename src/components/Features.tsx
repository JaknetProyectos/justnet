import { SlidersHorizontal, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("homeFeatures");

  const features = [
    {
      title: t("items.custom.title"),
      description: t("items.custom.description"),
      icon: SlidersHorizontal,
    },
    {
      title: t("items.precision.title"),
      description: t("items.precision.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-orange-500  to-amber-400 overflow-hidden">
      {/* Sutiles destellos/orbes decorativos al estilo Material Expressive */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-[40px] p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-orange-950/20"
              >
                {/* Icon Container (Contrasted Stone + Accent Orange) */}
                <div className="w-16 h-16 rounded-[24px] bg-stone-800 border border-stone-700/80 flex items-center justify-center mb-8 text-orange-400 shadow-inner group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-stone-950 transition-all duration-300">
                  <Icon className="w-7 h-7 stroke-[2.25]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-100 mb-4">
                  {feature.title}
                </h3>

                <p className="text-stone-300 leading-relaxed text-base sm:text-lg max-w-md">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}