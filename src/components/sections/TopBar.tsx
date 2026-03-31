"use client";

import { useState } from "react";
import { Clock, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function TopBar() {
  const [showToast, setShowToast] = useState(false);

  function handleEnglish() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
    <div className="relative bg-dark text-white/70 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-brand" />
            {siteConfig.contact.hours}
          </span>
          <a
            href={`tel:+${siteConfig.contact.whatsapp}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex"
          >
            <Phone size={13} className="text-brand" />
            {siteConfig.contact.phone}
          </a>
        </div>

        <div className="flex items-center gap-1 text-xs font-medium">
          <span className="text-white">Español</span>
          <span className="text-white/30">|</span>
          <button
            onClick={handleEnglish}
            className="cursor-pointer text-white/50 transition-colors hover:text-white"
          >
            English
          </button>
        </div>
      </div>

      {showToast && (
        <div className="absolute top-full right-4 z-50 mt-2 rounded-lg bg-dark-secondary px-4 py-2 text-sm text-white shadow-lg">
          English version coming soon!
        </div>
      )}
    </div>
  );
}
