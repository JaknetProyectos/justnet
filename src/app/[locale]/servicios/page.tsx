"use client";

import { useMemo, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useCart } from "@/context/CartContext";

import { Link } from "@/i18n/routing";

import {
  SingleServicesSpanish,
  SingleServicesEnglish,
  DataServicesSpanish,
  DataServicesEnglish,
  Service,
} from "@/data/services";

import { formatPrice } from "@/lib/price";
import { getOptimizedUrl } from "@/lib/images";

import ServiceDetailModal from "@/components/ServiceModal";

import {
  Database,
  Layers3,
  ArrowRight,
  ShoppingCart,
  Sparkles,
  Boxes,
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

export default function ServiciosPage() {
  const t = useTranslations("servicesPage");

  const { addItem } = useCart();

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [categoriaActivaId, setCategoriaActivaId] = useState<"data" | "single">(
    "data"
  );

  const locale = useLocale();
  const dataServices = locale == "es" ? DataServicesSpanish : DataServicesEnglish;
  const singleServices = locale == "es" ? SingleServicesSpanish : SingleServicesEnglish;

  const categorias = useMemo(
    () => [
      {
        id: "data" as const,
        nombre: t("categories.data.name"),
        descripcion: t("categories.data.description"),
        productos: dataServices,
        icon: Database,
        imagen: getOptimizedUrl(
          "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
      },
      {
        id: "single" as const,
        nombre: t("categories.single.name"),
        descripcion: t("categories.single.description"),
        productos: singleServices,
        icon: Layers3,
        imagen: getOptimizedUrl(
          "https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
      },
    ],
    [t]
  );

  const categoriaActiva = useMemo(
    () => categorias.find((categoria) => categoria.id === categoriaActivaId) ?? categorias[0],
    [categorias, categoriaActivaId]
  );

  const handleAddToCart = (producto: (typeof categoriaActiva.productos)[0]) => {
    addItem({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      precioFormateado: formatPrice(producto.precio),
      imagen: producto.imagen,
      cantidad: 1,
    });
  };

  return (
    <main className="min-h-screen bg-orange-600">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-stone-800 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-400" />
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
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            {categorias.map((categoria) => {
              const isActive = categoriaActiva.id === categoria.id;
              const Icon = categoria.icon;

              return (
                <button
                  key={categoria.id}
                  type="button"
                  onClick={() => setCategoriaActivaId(categoria.id)}
                  className={`group relative overflow-hidden rounded-3xl border text-left transition-all duration-300 p-5 sm:p-6 ${
                    isActive
                      ? "bg-stone-950 border-stone-800 text-stone-100 shadow-xl shadow-stone-950/20"
                      : "bg-stone-900/90 border-stone-800/60 hover:border-stone-700 text-stone-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex-1">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                          isActive ? "bg-orange-500 text-stone-950" : "bg-stone-800 text-orange-400"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-2xl font-black mb-2 text-stone-100">
                        {categoria.nombre}
                      </h3>

                      <p className="text-sm leading-relaxed max-w-sm text-stone-400">
                        {categoria.descripcion}
                      </p>

                      <div
                        className={`inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-wider ${
                          isActive ? "text-orange-400" : "text-stone-300 group-hover:text-orange-400"
                        }`}
                      >
                        {categoria.productos.length} {t("categories.available")}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    <img
                      src={categoria.imagen}
                      alt={categoria.nombre}
                      className="hidden sm:block w-24 h-24 rounded-2xl object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-full px-4 py-1.5 mb-4">
                <Boxes className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                  {t("catalog.badge")}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-stone-950 mb-2">
                {categoriaActiva.nombre}
              </h2>

              <p className="text-stone-900 font-medium max-w-2xl leading-relaxed">
                {t("catalog.description")}
              </p>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl px-5 py-4 self-start lg:self-auto">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                {t("catalog.availableLabel")}
              </p>

              <p className="text-2xl font-black text-orange-400">
                {categoriaActiva.productos.length}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categoriaActiva.productos.map((producto) => (
              <div
                key={producto.id}
                className="group bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-950">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 opacity-90 transition-all duration-500"
                  />

                  <div className="absolute top-4 left-4">
                    <div className="bg-stone-950/90 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-bold tracking-wider text-stone-200 border border-stone-800">
                      {t("catalog.vatIncluded")}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedService(producto)}
                      className="text-left w-full"
                    >
                      <h3 className="text-2xl font-black text-stone-100 mb-2 group-hover:text-orange-400 transition-colors duration-200">
                        {producto.nombre}
                      </h3>
                    </button>

                    <p className="text-stone-400 leading-relaxed text-sm mb-6">
                      {producto.descripcion}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4 pt-4 border-t border-stone-800/80">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                        {t("catalog.finalPrice")}
                      </p>

                      <p className="text-2xl sm:text-3xl font-black text-stone-100">
                        {formatPrice(producto.precio)}
                      </p>
                      <p className="text-xs text-stone-400">
                        {t("taxesIncluded")}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(producto)}
                      className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-stone-950 font-black px-4 py-3 rounded-xl transition-all duration-200 text-sm shadow-md shadow-orange-600/20"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {t("catalog.addToCart")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-950 rounded-3xl p-6 sm:p-10 text-stone-100 relative overflow-hidden border border-stone-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/10 translate-x-16 -translate-y-16 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-3 text-stone-100">
                {t("cta.title")}
              </h2>

              <p className="text-stone-400 leading-relaxed text-base mb-6">
                {t("cta.description")}
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-orange-600 text-stone-950 hover:bg-orange-500 font-black px-6 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                {t("cta.button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />

      <Footer />
    </main>
  );
}