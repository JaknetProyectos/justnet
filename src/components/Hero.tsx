"use client";


import { useTranslations } from "next-intl";
import {  BarChart3, Sparkles } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20">
      {/* Glow & Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lava Glow Orbs */}
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-orange-600/25 via-amber-500/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-amber-500/30 mb-8 backdrop-blur-md shadow-lg shadow-amber-500/5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-100 leading-[0.95] mb-8 whitespace-pre-line">
              {t("title")}
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
              {t("description")}
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Container glow backdrop */}
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-amber-500/30 to-orange-500/30 blur-xl opacity-70" />

            <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-[36px] p-6 backdrop-blur-xl shadow-2xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-amber-400 font-medium">
                    {t("dashboardLabel")}
                  </p>
                  <h3 className="text-2xl font-black text-zinc-100">
                    {t("dashboardTitle")}
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <BarChart3 className="w-7 h-7 text-zinc-950" />
                </div>
              </div>

              {/* Main Image Replacement */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 mb-6 aspect-video flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={t("dashboardTitle")}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-zinc-950/60 border border-zinc-800/80 p-5">
                  <p className="text-sm text-zinc-400 mb-2">
                    {t("stats.revenue")}
                  </p>
                  <h4 className="text-3xl font-black text-amber-400">
                    +28%
                  </h4>
                </div>

                <div className="rounded-3xl bg-zinc-950/60 border border-zinc-800/80 p-5">
                  <p className="text-sm text-zinc-400 mb-2">
                    {t("stats.conversion")}
                  </p>
                  <h4 className="text-3xl font-black text-orange-400">
                    4.9%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}