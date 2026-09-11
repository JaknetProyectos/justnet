"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useCart } from "@/context/CartContext";

import { formatPrice } from "@/lib/price";
import { getOptimizedUrl } from "@/lib/images";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircleDollarSign,
  FileSpreadsheet,
  Mail,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  User2,
} from "lucide-react";

import { useAlert } from "@/context/AlertContext";
import { useTranslations } from "next-intl";

export default function CustomServicePage() {
  const t = useTranslations("customService");

  const { addItem } = useCart();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const [monto, setMonto] = useState("");

  const numericAmount = Number(monto || 0);

  const { showAlert } = useAlert();

  const handleSubmit = () => {
    if (!nombre || !correo || !quoteId || !numericAmount) {
      showAlert({
        title: t("alerts.warningTitle"),
        message: t("alerts.completeFields"),
        type: "warning",
      });

      return;
    }

    addItem({
      id: Date.now(),
      nombre: `${t("cartItemTitle")} #${quoteId} - ${nombre}`,
      precio: numericAmount,
      precioFormateado: formatPrice(numericAmount),
      imagen: getOptimizedUrl(
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      ),
      cantidad: 1,
    });
  };

  return (
    <main className="min-h-screen bg-orange-600">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-stone-800 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-400" />

                <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                  {t("badge")}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 leading-tight">
                {t("title")}
              </h1>

              <p className="mt-4 text-lg text-stone-900 font-medium max-w-2xl leading-relaxed">
                {t("description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3.5">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-950 border border-stone-800 shadow-md">
                  <ShieldCheck className="w-5 h-5 text-orange-400" />

                  <span className="font-bold text-xs uppercase tracking-wider text-stone-200">
                    {t("features.securePayment")}
                  </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-950 border border-stone-800 shadow-md">
                  <BriefcaseBusiness className="w-5 h-5 text-orange-400" />

                  <span className="font-bold text-xs uppercase tracking-wider text-stone-200">
                    {t("features.businessService")}
                  </span>
                </div>
              </div>
            </div>

            {/* Preview Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-4 shadow-xl">
              <img
                src={getOptimizedUrl(
                  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )}
                alt="Jusnet"
                className="w-full h-[280px] sm:h-[320px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_360px] gap-6 sm:gap-8 items-start">
          {/* Form Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-8 sm:mb-10">
              <div className="w-14 h-14 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center mb-5">
                <ReceiptText className="w-7 h-7 text-orange-400" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-stone-100">
                {t("form.title")}
              </h2>

              <p className="mt-2 text-stone-400 text-sm sm:text-base leading-relaxed">
                {t("form.description")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  <User2 className="w-4 h-4 text-orange-400" />
                  {t("form.name")}
                </label>

                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder={t("form.namePlaceholder")}
                  className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  <Mail className="w-4 h-4 text-orange-400" />
                  {t("form.email")}
                </label>

                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                />
              </div>

              {/* Quote ID */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  <FileSpreadsheet className="w-4 h-4 text-orange-400" />
                  {t("form.quoteId")}
                </label>

                <input
                  type="text"
                  value={quoteId}
                  onChange={(e) => setQuoteId(e.target.value)}
                  placeholder={t("form.quoteIdPlaceholder")}
                  className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                />
              </div>

              {/* Monto */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  <CircleDollarSign className="w-4 h-4 text-orange-400" />
                  {t("form.amount")}
                </label>

                <input
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="15000"
                  className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                />

                {numericAmount > 0 && (
                  <div className="mt-3.5 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 flex items-center justify-between">
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">
                      {t("form.estimatedTotal")}
                    </span>

                    <span className="text-lg font-black text-stone-100">
                      {formatPrice(numericAmount)}
                    </span>
                  </div>
                )}
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full h-14 rounded-xl bg-orange-600 hover:bg-orange-500 text-stone-950 font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20"
                >
                  {t("form.addToCart")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Card */}
          <aside className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl lg:top-28">
            <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-5">
              <BadgeCheck className="w-6 h-6 text-orange-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-100 mb-3">
              {t("sideCard.title")}
            </h3>

            <p className="text-stone-400 text-sm leading-relaxed">
              {t("sideCard.description")}
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="bg-stone-900 rounded-xl border border-stone-800 p-4">
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">
                  {t("sideCard.identifier")}
                </p>

                <p className="font-bold text-sm text-stone-200">
                  {quoteId || t("sideCard.pending")}
                </p>
              </div>

              <div className="bg-stone-900 rounded-xl border border-stone-800 p-4">
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">
                  {t("sideCard.amount")}
                </p>

                <p className="font-bold text-sm text-stone-200">
                  {numericAmount > 0
                    ? formatPrice(numericAmount)
                    : t("sideCard.undefined")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}