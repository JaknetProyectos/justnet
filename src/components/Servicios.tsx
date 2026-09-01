"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ShoppingCart, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  DataServicesSpanish,
  DataServicesEnglish,
  SingleServicesSpanish,
} from "@/data/services";
import { formatPrice } from "@/lib/price";
import ServiceDetailModal from "./ServiceModal";

let productos = [...DataServicesSpanish.slice(0, 4)];

type Service = (typeof productos)[0];

export default function Servicios() {
  const t = useTranslations("servicesSection");
  const locale = useLocale();
  productos = locale === "es" ? DataServicesSpanish : DataServicesEnglish;
  productos = productos.slice(0, 4);

  const { addItem } = useCart();

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleAddToCart = (producto: Service) => {
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
    <>
      <section
        id="servicios"
        className="py-24 sm:py-32 bg-stone-950 text-stone-100 relative overflow-hidden"
      >
        {/* Glow sutil en el fondo */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-orange-500/30 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  {t("badge")}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-100 leading-tight mb-6">
                {t.rich("title", {
                  br: () => <br />,
                })}
              </h2>

              {/* Description */}
              <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
                {t.rich("description", {
                  br: () => <br />,
                })}
              </p>
            </div>

            {/* Ver Todos Button */}
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-stone-900 border border-stone-800 hover:border-orange-500/50 hover:bg-stone-850 text-stone-200 hover:text-orange-400 font-semibold transition-all duration-300 shadow-md group"
            >
              {t("viewAll")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="group bg-stone-900/80 border border-stone-800 hover:border-orange-500/40 rounded-[36px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/20 backdrop-blur-sm"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-stone-950">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content Body */}
                  <div className="p-8">
                    {/* Price Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-orange-950/40 border border-orange-500/30 mb-6">
                      <span className="text-xs font-bold text-orange-400 tracking-wide">
                        {formatPrice(producto.precio)} MXN {t("taxesIncluded")}
                      </span>
                    </div>

                    {/* Title */}
                    <button
                      type="button"
                      onClick={() => setSelectedService(producto)}
                      className="text-left w-full group/title"
                    >
                      <h3 className="text-2xl font-black tracking-tight text-stone-100 mb-3 group-hover/title:text-orange-400 transition-colors">
                        {producto.nombre}
                      </h3>
                    </button>

                    {/* Description */}
                    <p className="text-stone-400 leading-relaxed text-sm line-clamp-3">
                      {producto.descripcion}
                    </p>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-8 pb-8 pt-0">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(producto)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-stone-950 font-black transition-all duration-200 shadow-lg shadow-orange-600/20 active:scale-95"
                  >
                    <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                    {t("add")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}