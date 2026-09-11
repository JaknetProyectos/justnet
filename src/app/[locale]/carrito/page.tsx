"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Lock,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { processKeycopPayment } from "@/lib/etomin";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useAlert } from "@/context/AlertContext";
import { formatPrice } from "@/lib/price";
import { useProduct } from "@/hooks/useServices";

import { CartItem } from "@/context/CartContext";

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  city: string;
  address1: string;
  postalCode: string;
  state: string;
  country: string;
  middleName: string;
  cardNumber: string;
  cardholderName: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

const initialFormData: CheckoutFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone1: "",
  city: "",
  address1: "",
  postalCode: "",
  state: "CDMX",
  country: "México",
  middleName: "",
  cardNumber: "",
  cardholderName: "",
  expirationMonth: "",
  expirationYear: "",
  cvv: "",
};

const inputClassName =
  "w-full h-12 px-4 rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-100 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20";

const coupons = [
  { code: "BI10", discount: 10 },
  { code: "BI15", discount: 15 },
  { code: "BI20", discount: 20 },
] as const;



export function CartItemRow({ item, formatPrice }: { item: any, formatPrice: (val: number) => string }) {
  const t = useTranslations("cart");
  // Si necesitas llamar a un Hook para obtener o sincronizar los datos del servicio en tiempo real:
  // const serviceData = useService(item.id);
  const serviceData = useProduct(item.id)
  const qty = serviceData.cantidad ?? item.quantity ?? 1;
  const lineTotal = serviceData.precio * qty;

  return (
    <div
      key={serviceData.id}
      className="flex gap-4 rounded-[28px] border border-zinc-800 bg-zinc-950 p-4 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <img
          src={serviceData.imagen}
          alt={serviceData.nombre}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h4 className="text-lg font-bold leading-tight text-zinc-100">
              {serviceData.nombre}
            </h4>
            <p className="mt-1 text-sm text-zinc-400">
              {t("quantity")}: {qty}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-sm text-zinc-400">
              {t("subtotal")}
            </p>
            <p className="font-bold text-amber-400">
              {formatPrice(lineTotal)}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          $ {serviceData.precio} MXN {t("beforeVat")}
        </p>
      </div>
    </div>
  );
}

type Coupon = (typeof coupons)[number];

export default function CarritoPage() {
  const t = useTranslations("cart");
  const { showAlert } = useAlert();

  const cart = useCart() as {
    items?: CartItem[];
    clearCart?: () => void;
  };

  const items = cart.items ?? [];

  const clearCart = cart.clearCart;

  const [step, setStep] = useState<1 | 2>(1);
  const [isPaying, setIsPaying] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponMessage, setCouponMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => {
      const qty = item.cantidad ?? 1;
      return acc + item.precio * qty;
    }, 0);
  }, [items]);

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return (subtotal * appliedCoupon.discount) / 100;
  }, [appliedCoupon, subtotal]);

  const subtotalAfterDiscount = useMemo(() => {
    return Math.max(0, subtotal - discountAmount);
  }, [subtotal, discountAmount]);

  const vatAmount = useMemo(() => {
    return subtotalAfterDiscount * 0.16;
  }, [subtotalAfterDiscount]);

  const totalAmount = useMemo(() => {
    return subtotalAfterDiscount + vatAmount;
  }, [subtotalAfterDiscount, vatAmount]);

  const amountToPay = useMemo(() => {
    return totalAmount;
  }, [totalAmount]);

  const totalItems = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + (item.cantidad ?? 1),
      0
    );
  }, [items]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (!items.length) return;
    setStep(2);
  };

  const locale = useLocale();

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();

    if (!code) {
      setCouponMessage({
        type: "error",
        text: t("couponEmpty"),
      });
      return;
    }

    const found = coupons.find((coupon) => coupon.code === code);

    if (!found) {
      setCouponMessage({
        type: "error",
        text: t("invalidCoupon"),
      });
      return;
    }

    setAppliedCoupon(found);
    setCouponMessage({
      type: "success",
      text: t("couponApplied"),
    });
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);
    setIsPaying(true);

    try {
      const orderId = `ORDER-${Date.now()}`;

      const paymentResult = await processKeycopPayment({
        amount: amountToPay,
        orderId,
        cardData: {
          number: formData.cardNumber,
          name: formData.cardholderName,
          month: formData.expirationMonth,
          year: formData.expirationYear,
          cvv: formData.cvv,
        },
        customer: {
          nombre: formData.firstName,
          apellido: formData.lastName,
          email: formData.email,
          telefono: formData.phone1,
          ciudad: formData.city,
          direccion: formData.address1,
          cp: formData.postalCode,
          estado: formData.state,
          pais: formData.country,
        },
      });

      if (!paymentResult.success) {

        throw new Error(t("paymentRejected"));
      }

      const emailResponse = await fetch(`/${locale ?? "es"}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference: orderId,
          customer: {
            nombre: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            telefono: formData.phone1,
          },
          amount: amountToPay,
          total: `$ ${amountToPay} MXN`,
          items,
        }),
      });

      if (!emailResponse.ok) {
        let emailErrorMessage = t("unknownPaymentError");

        try {
          const emailResult = await emailResponse.json();
          if (emailResult?.error) {
            emailErrorMessage = emailResult.error;
          }
        } catch {
          // Keep default error message
        }

        throw new Error(emailErrorMessage);
      }

      const successText = t("paymentSuccess");

      setSuccessMessage(successText);

      showAlert({
        title: successText.split(".")[0] || successText,
        message: successText,
        type: "success",
      });

      clearCart?.();
      setStep(1);
      setFormData(initialFormData);
      setCouponInput("");
      setAppliedCoupon(null);
      setCouponMessage(null);
    } catch (error) {
      const errorText =
        error instanceof Error ? error.message : t("unknownPaymentError");

      setErrorMessage(errorText);

      showAlert({
        title: t("paymentRejected"),
        message: errorText,
        type: "error",
      });
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      <section className="mt-8 bg-gradient-to-br from-orange-500 via-orange-500 to-amber-600 py-24 min-h-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span className="text-sm font-semibold text-white">
                  {t("badge")}
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl drop-shadow-md">
                {t("title")}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors shadow-sm ${step === 1
                  ? "border-zinc-800 bg-zinc-900 text-amber-400"
                  : "border-white/20 bg-white/10 text-orange-100 backdrop-blur-md"
                  }`}
              >
                1. {t("stepCart")}
              </div>
              <ChevronRight className="w-4 h-4 text-orange-200" />
              <div
                className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors shadow-sm ${step === 2
                  ? "border-zinc-800 bg-zinc-900 text-amber-400"
                  : "border-white/20 bg-white/10 text-orange-100 backdrop-blur-md"
                  }`}
              >
                2. {t("stepPayment")}
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-[36px] border border-zinc-800 bg-zinc-900 p-10 text-center shadow-2xl sm:p-14">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950">
                <ShoppingBag className="w-9 h-9 text-amber-500" />
              </div>

              <h3 className="mb-4 text-3xl font-black text-zinc-50">
                {t("emptyTitle")}
              </h3>

              <p className="mx-auto mb-8 max-w-xl leading-relaxed text-zinc-400">
                {t("emptyDescription")}
              </p>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-orange-500/25"
              >
                {t("viewServices")}
              </Link>
            </div>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 shadow-2xl">
                  <div className="border-b border-zinc-800 p-6 sm:p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <BadgeCheck className="w-5 h-5 text-amber-400" />
                      <h3 className="text-2xl font-black text-zinc-50">
                        {step === 1 ? t("cartItems") : t("paymentData")}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-zinc-400">
                      {step === 1
                        ? t("cartDescription")
                        : t("paymentDescription")}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    {step === 1 ? (
                      <div className="space-y-5">
                        {items.map((item) => (

                          <CartItemRow
                            key={item.id}
                            item={item}

                            formatPrice={formatPrice}
                          />
                        ))}

                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                          <button
                            type="button"
                            onClick={handleContinue}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-orange-500/20"
                          >
                            {t("continueCheckout")}
                          </button>

                          <Link
                            href="/servicios"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            {t("continueShopping")}
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handlePay} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label={t("firstName")}>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>

                          <Field label={t("lastName")}>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label={t("email")}>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>

                          <Field label={t("phone")}>
                            <input
                              type="tel"
                              name="phone1"
                              value={formData.phone1}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label={t("city")}>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>

                          <Field label={t("state")}>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>
                        </div>

                        <Field label={t("address")}>
                          <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            required
                            className={inputClassName}
                          />
                        </Field>

                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label={t("postalCode")}>
                            <input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>

                          <Field label={t("country")}>
                            <input
                              type="text"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              required
                              className={inputClassName}
                            />
                          </Field>
                        </div>

                        <div className="border-t border-zinc-800 pt-6">
                          <div className="mb-5 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-amber-400" />
                            <h4 className="text-lg font-black text-zinc-100">
                              {t("cardData")}
                            </h4>
                          </div>

                          <div className="space-y-4">
                            <Field label={t("cardholderName")}>
                              <input
                                type="text"
                                name="cardholderName"
                                value={formData.cardholderName}
                                onChange={handleChange}
                                required
                                className={inputClassName}
                              />
                            </Field>

                            <Field label={t("cardNumber")}>
                              <input
                                maxLength={16}
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                inputMode="numeric"
                                placeholder="4111111111111111"
                                required
                                className={inputClassName}
                              />
                            </Field>

                            <div className="grid grid-cols-3 gap-4">
                              <Field label={t("month")}>
                                <input
                                  type="text"
                                  name="expirationMonth"
                                  value={formData.expirationMonth}
                                  onChange={handleChange}
                                  placeholder="08"
                                  maxLength={2}
                                  required
                                  className={inputClassName}
                                />
                              </Field>

                              <Field label={t("year")}>
                                <input
                                  type="text"
                                  name="expirationYear"
                                  value={formData.expirationYear}
                                  onChange={handleChange}
                                  placeholder="2036"
                                  maxLength={4}
                                  required
                                  className={inputClassName}
                                />
                              </Field>

                              <Field label={t("cvv")}>
                                <input
                                  type="password"
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleChange}
                                  inputMode="numeric"
                                  maxLength={4}
                                  required
                                  className={inputClassName}
                                />
                              </Field>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            {t("backToCart")}
                          </button>

                          <button
                            type="submit"
                            disabled={isPaying}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg shadow-orange-500/20"
                          >
                            <Lock className="w-4 h-4" />
                            {isPaying ? t("processingPayment") : t("payNow")}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {errorMessage ? (
                  <div className="flex items-start gap-3 rounded-[28px] border border-red-900 bg-red-950/40 p-5 text-red-400 backdrop-blur-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                ) : null}

                {successMessage ? (
                  <div className="flex items-start gap-3 rounded-[28px] border border-green-900 bg-green-950/40 p-5 text-green-400 backdrop-blur-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <p>{successMessage}</p>
                  </div>
                ) : null}
              </div>

              <aside className="rounded-[36px] border border-zinc-800 bg-zinc-900 p-6 shadow-2xl sm:p-8 lg:top-6 lg:sticky">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950">
                    <ShoppingBag className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-zinc-50">
                      {t("summary")}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {t("currentOrder")}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-5">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      {t("couponTitle")}
                    </p>

                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase());
                          setCouponMessage(null);
                        }}
                        placeholder={t("couponPlaceholder")}
                        className="h-12 flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-zinc-100 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20"
                      />

                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-sm font-bold text-zinc-950 transition-all duration-300 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20"
                      >
                        {t("applyCoupon")}
                      </button>
                    </div>

                    {couponMessage ? (
                      <p
                        className={`mt-3 text-sm font-medium ${couponMessage.type === "success"
                          ? "text-green-400"
                          : "text-red-400"
                          }`}
                      >
                        {couponMessage.text}
                      </p>
                    ) : null}

                    {appliedCoupon ? (
                      <div className="mt-3 rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3">
                        <p className="text-sm font-bold text-amber-400">
                          {t("appliedCoupon")} {appliedCoupon.code}
                        </p>
                        <p className="text-xs text-zinc-400 mt-1">
                          -{appliedCoupon.discount}%
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>{t("subtotalBeforeVat")}</span>
                    <span className="font-semibold text-zinc-100">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  {appliedCoupon ? (
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>
                        {t("discount")} ({appliedCoupon.code})
                      </span>
                      <span className="font-semibold text-green-400">
                        - {formatPrice(discountAmount)}
                      </span>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>{t("vatLabel")}</span>
                    <span className="font-semibold text-zinc-100">
                      {formatPrice(vatAmount)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>{t("services")}</span>
                    <span className="font-semibold text-zinc-100">
                      {items.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>{t("units")}</span>
                    <span className="font-semibold text-zinc-100">
                      {totalItems}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-zinc-800 pt-5 mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">{t("total")}</span>
                    <span className="text-3xl font-black text-amber-400">
                      {formatPrice(amountToPay)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {t("secureDescription")}
                  </p>
                  <div className="flex items-center justify-between opacity-80 mix-blend-screen">
                    <Image
                      src="/secure-payment.png"
                      width={150}
                      height={30}
                      alt="Secure payment"
                      className="object-contain brightness-0 invert"
                    />
                    <Image
                      src="/keycop.webp"
                      width={150}
                      height={30}
                      alt="Keycop"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}