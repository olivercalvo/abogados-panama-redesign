"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="#hero" className="flex-shrink-0">
          <Image
            src="/logo-abogadospanama.png"
            alt={siteConfig.name}
            width={180}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-primary transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition-colors hover:bg-brand-hover md:inline-flex"
        >
          Consulta Gratis
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-text-primary md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-text-primary transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-brand px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-brand-hover"
          >
            Consulta Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
