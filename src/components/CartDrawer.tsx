"use client";

import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

import {
  X,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  ArrowRight,
} from "lucide-react";

import { Link } from "@/i18n/routing";
import { useProduct } from "@/hooks/useServices";

function CartItemCard({ item }: { item: any }) {
  const t = useTranslations("cartDrawer");
  const itemData = useProduct(item.id)
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="group bg-stone-900 border border-stone-800 rounded-3xl p-4 hover:border-stone-700 transition-all duration-300">
      <div className="flex gap-4">
        {/* Image */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 flex-shrink-0">
          <img
            src={itemData.imagen}
            alt={itemData.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-stone-100 leading-snug">
                {itemData.nombre}
              </h3>

              <p className="text-orange-400 font-bold text-base mt-2">
                {itemData.precioFormateado}
              </p>
            </div>

            <button
              type="button"
              onClick={() => removeItem(itemData.id)}
              className="text-stone-400 hover:text-red-400 hover:bg-stone-950 transition-all duration-300 rounded-full p-2 border border-transparent hover:border-stone-800"
              aria-label={t("removeFromCart")}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center bg-stone-950 border border-stone-800 rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  updateQuantity(
                    itemData.id,
                    itemData.cantidad - 1
                  )
                }
                className="w-9 h-9 flex items-center justify-center hover:bg-stone-900 transition-colors duration-200"
                aria-label={t("decreaseQuantity")}
              >
                <Minus className="w-3 h-3 text-orange-400" />
              </button>

              <span className="w-10 text-center text-sm font-bold text-stone-100">
                {itemData.cantidad}
              </span>

              <button
                type="button"
                onClick={() =>
                  updateQuantity(
                    itemData.id,
                    itemData.cantidad + 1
                  )
                }
                className="w-9 h-9 flex items-center justify-center hover:bg-stone-900 transition-colors duration-200"
                aria-label={t("increaseQuantity")}
              >
                <Plus className="w-3 h-3 text-orange-400" />
              </button>
            </div>

            <p className="text-xs text-stone-500 font-medium">
              {t("vatIncluded")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const t = useTranslations("cartDrawer");

  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPriceFormatted,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label={t("closeCart")}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-stone-950 z-50 shadow-2xl flex flex-col border-l border-stone-800">
        {/* Header */}
        <div className="px-6 py-6 border-b border-stone-800 bg-stone-900/50">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-orange-400 mb-3 font-bold">
                Jusnet
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center shadow-sm">
                  <ShoppingCart className="w-5 h-5 text-orange-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-stone-100 tracking-tight">
                    {t("title")}
                  </h2>

                  <p className="text-sm text-stone-400 font-medium">
                    {totalItems}{" "}
                    {totalItems === 1
                      ? t("singleService")
                      : t("multipleServices")}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:border-stone-700 transition-all duration-300"
              aria-label={t("closeCart")}
            >
              <X className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-6 shadow-inner">
                <ShoppingCart className="w-10 h-10 text-orange-400" />
              </div>

              <h3 className="text-2xl font-black text-stone-100 mb-3 tracking-tight">
                {t("emptyTitle")}
              </h3>

              <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8">
                {t("emptyDescription")}
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                {t("continueExploring")}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-800 bg-stone-950 px-6 py-6">
            {/* Total */}
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-5 mb-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                    {t("estimatedTotal")}
                  </p>

                  <h3 className="text-3xl font-black text-stone-100 tracking-tight">
                    {totalPriceFormatted}
                  </h3>
                </div>

                <p className="text-xs text-stone-500 text-right leading-relaxed font-medium">
                  {t("taxesIncluded")}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                href="/carrito"
                onClick={() => setIsOpen(false)}
                className="group w-full bg-orange-600 hover:bg-orange-500 text-stone-950 font-black uppercase tracking-wider text-xs py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/25"
              >
                {t("checkout")}

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button
                type="button"
                onClick={clearCart}
                className="w-full border border-stone-800 hover:bg-stone-900 text-stone-300 hover:text-stone-100 font-bold py-3 rounded-2xl transition-all duration-300 text-xs uppercase tracking-wider"
              >
                {t("clearCart")}
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}