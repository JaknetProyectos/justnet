"use client";

import { useEffect, useState } from "react";

import {
  X,
  Minus,
  Plus,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";

import { formatPrice } from "@/lib/price";
import { useCart } from "@/context/CartContext";

import Header from "./Header";
import Footer from "./Footer";

import { useTranslations } from "next-intl";

interface Service {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
}: ServiceDetailModalProps) {
  const t = useTranslations("serviceModal");

  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity <= 1) return;

    setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addItem({
      id: service.id,
      nombre: service.nombre,
      precio: service.precio,
      precioFormateado: formatPrice(service.precio),
      imagen: service.imagen,
      cantidad: quantity,
    });

    setQuantity(1);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto bg-orange-600">
      <Header />

      {/* TOP BAR */}
      <div className="sticky top-0 z-40 border-b border-stone-800 bg-stone-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2.5 rounded-xl border border-stone-800 bg-stone-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-200 transition-all hover:bg-stone-800 hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-800 bg-stone-900 text-stone-400 transition-all hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <section className="relative">
        <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="relative overflow-hidden bg-stone-950 min-h-[350px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10 lg:bg-gradient-to-r" />

            <img
              src={service.imagen}
              alt={service.nombre}
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />

            {/* FLOATING BADGE */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto z-20 rounded-2xl border border-stone-800 bg-stone-950/90 px-6 py-4 backdrop-blur-xl shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {t("brand")}
              </p>

              <p className="mt-1 text-2xl font-black text-stone-100">
                {formatPrice(service.precio)}
              </p>
            </div>
          </div>

          {/* INFO SIDE */}
          <div className="flex items-center bg-stone-950 px-6 py-10 sm:py-14 lg:px-14">
            <div className="mx-auto w-full max-w-xl">
              {/* LABEL */}
              <div className="mb-4 inline-flex items-center rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  {t("professionalService")}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-stone-100">
                {service.nombre}
              </h1>

              {/* PRICE */}
              <div className="mt-6 flex items-end gap-3">
                <p className="text-3xl sm:text-4xl font-black text-stone-100">
                  {formatPrice(service.precio)}
                </p>

                <span className="pb-1 text-xs text-stone-400 font-medium">
                  {t("taxIncluded")}
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 rounded-2xl border border-stone-800 bg-stone-900/80 p-6 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-stone-300">
                  {service.descripcion}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                  {t("quantity")}
                </p>

                <div className="inline-flex items-center overflow-hidden rounded-xl border border-stone-800 bg-stone-900">
                  <button
                    type="button"
                    onClick={decrease}
                    className="flex h-12 w-12 items-center justify-center text-stone-300 transition-all hover:bg-stone-800 hover:text-orange-400"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <div className="flex h-12 min-w-[64px] items-center justify-center border-x border-stone-800 text-base font-black text-stone-100">
                    {quantity}
                  </div>

                  <button
                    type="button"
                    onClick={increase}
                    className="flex h-12 w-12 items-center justify-center text-stone-300 transition-all hover:bg-stone-800 hover:text-orange-400"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-6 rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  {t("estimatedTotal")}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-3xl font-black tracking-tight text-stone-100">
                    {formatPrice(service.precio * quantity)}
                  </h3>

                  <div className="rounded-xl bg-stone-800 px-3 py-1.5 text-xs font-bold text-orange-400 border border-stone-700/50">
                    {quantity}{" "}
                    {quantity > 1
                      ? t("servicePlural")
                      : t("serviceSingular")}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-orange-600 px-6 py-4 text-xs font-black uppercase tracking-wider text-stone-950 transition-all duration-300 hover:bg-orange-500 shadow-lg shadow-orange-600/20"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {t("addToCart")}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-stone-800 bg-stone-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone-300 transition-all hover:bg-stone-800 hover:text-stone-100"
                >
                  {t("cancel")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}