"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Menu,
  X,
  ShoppingCart,
  House,
  BriefcaseBusiness,
  Users,
  Mail,
  Languages,
} from "lucide-react";

import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import { useLocaleContext } from "@/context/LangContext";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { locale, switchLanguage, isPending } = useLocaleContext();
  const { totalItems, setIsOpen } = useCart();

  const navLinks = [
    {
      href: "/",
      label: t("home"),
      icon: House,
    },
    {
      href: "/nosotros",
      label: t("about"),
      icon: Users,
    },
    {
      href: "/servicios",
      label: t("services"),
      icon: BriefcaseBusiness,
    },
    {
      href: "/contacto",
      label: t("contact"),
      icon: Mail,
    },
  ];

  const toggleLanguage = () => {
    switchLanguage(locale === "es" ? "en" : "es");
  };

  return (
    <header className="fixed rounded-b-2xl p-3 top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 hover:text-amber-400"
                >
                  <Icon className="h-4 w-4 text-zinc-400 transition-colors duration-300 group-hover:text-amber-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language */}
            <button
              type="button"
              onClick={toggleLanguage}
              disabled={isPending}
              className="flex h-11 items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-800 hover:text-amber-400 disabled:opacity-50"
            >
              <Languages className="h-4 w-4 text-amber-400" />
              <span>{locale === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={t("openCart")}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition-all duration-300 hover:border-orange-500/50 hover:bg-zinc-800 hover:text-orange-400"
            >
              <ShoppingCart className="h-5 w-5" />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-1 text-xs font-bold text-zinc-950 shadow-lg shadow-orange-500/20">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("openMenu")}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-amber-400" />
              ) : (
                <Menu className="h-5 w-5 text-zinc-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pb-5 lg:hidden">
            <nav className="flex flex-col gap-2 rounded-3xl border border-zinc-800 bg-zinc-900/95 p-3 backdrop-blur-xl">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl p-3 text-zinc-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 hover:text-amber-400"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700/50">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>

                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}