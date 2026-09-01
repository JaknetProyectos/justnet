"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Link } from "@/i18n/routing";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import { useContact } from "@/hooks/useContact";
import { useAlert } from "@/context/AlertContext";

export default function ContactoPage() {
  const t = useTranslations("contact");

  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const { showAlert } = useAlert();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await sendContactForm({
      nombre: formData.nombre,
      email: formData.correo,
      telefono: formData.telefono,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
    });

    if (result.success) {
      setSubmitted(true);

      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });

      return;
    }

    showAlert({
      title: t("alerts.errorTitle"),
      type: "error",
      message:
        result.error || t("alerts.defaultError"),
    });
  };

  return (
    <main className="min-h-screen bg-orange-600">
      <Header />

      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-stone-800 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <MessageSquare className="w-4 h-4 text-orange-400" />

              <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                {t("hero.badge")}
              </span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="mt-4 text-lg text-stone-900 font-medium leading-relaxed max-w-2xl">
                {t("hero.description")}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-orange-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-stone-100">
                      {t("info.title")}
                    </h2>

                    <p className="text-xs text-stone-400 font-medium">
                      {t("info.subtitle")}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <a
                    href="tel:+5215552445674"
                    className="group flex items-center gap-4 rounded-2xl border border-stone-800 bg-stone-900/80 px-4 py-3.5 hover:border-orange-500/50 hover:bg-stone-900 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">
                        {t("info.phone")}
                      </p>

                      <span className="text-stone-200 font-bold text-sm group-hover:text-orange-400 transition-colors">
                        +52 1 55 5244 5674
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:contacto@jusnet.com.mx"
                    className="group flex items-center gap-4 rounded-2xl border border-stone-800 bg-stone-900/80 px-4 py-3.5 hover:border-orange-500/50 hover:bg-stone-900 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">
                        {t("info.email")}
                      </p>

                      <span className="text-stone-200 font-bold text-sm group-hover:text-orange-400 transition-colors">
                        contacto@jusnet.com.mx
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-2xl border border-stone-800 bg-stone-900/80 px-4 py-3.5">
                    <div className="w-10 h-10 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-0.5">
                        {t("info.office")}
                      </p>

                      <p className="text-xs leading-relaxed text-stone-300 font-medium">
                        {t("info.address")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Card */}
              <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 text-stone-100 overflow-hidden relative shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-500/10 translate-x-10 -translate-y-10 blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6 text-orange-400" />
                  </div>

                  <h2 className="text-2xl font-black mb-2 text-stone-100">
                    {t("custom.title")}
                  </h2>

                  <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    {t("custom.description")}
                  </p>

                  <Link
                    href="/personalizado"
                    className="inline-flex items-center gap-2 bg-orange-600 text-stone-950 font-black px-5 py-3.5 rounded-xl hover:bg-orange-500 transition-all duration-200 text-xs uppercase tracking-wider"
                  >
                    {t("custom.button")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-orange-400" />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-100">
                    {t("form.title")}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-400 font-medium">
                    {t("form.subtitle")}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-orange-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-stone-100 mb-2">
                    {t("success.title")}
                  </h3>

                  <p className="text-stone-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    {t("success.description")}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-stone-950 font-black px-6 py-3.5 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider"
                  >
                    {t("success.button")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                        {t("form.fields.name")}
                      </label>

                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.name")}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                        {t("form.fields.email")}
                      </label>

                      <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.email")}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                        {t("form.fields.phone")}
                      </label>

                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.phone")}
                        className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                        {t("form.fields.subject")}
                      </label>

                      <input
                        type="text"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.subject")}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                      {t("form.fields.message")}
                    </label>

                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder={t("form.placeholders.message")}
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950 text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-500/60 resize-none transition-all duration-200 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 rounded-xl bg-orange-600 hover:bg-orange-500 text-stone-950 font-black text-xs uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 mt-2"
                  >
                    <Send className="w-4 h-4" />

                    {isLoading
                      ? t("form.sending")
                      : t("form.submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}