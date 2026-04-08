"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Popup } from "@/lib/types";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "popup_hidden_until";

export default function PopupModal() {
  const t = useTranslations("common.popup");
  const [popups, setPopups] = useState<Popup[]>([]);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Check "don't show today" flag
    const hiddenUntil = localStorage.getItem(STORAGE_KEY);
    if (hiddenUntil && new Date(hiddenUntil) > new Date()) return;

    fetch("/api/popups")
      .then((r) => r.json())
      .then((data: Popup[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setPopups(data);
          setVisible(true);
        }
      })
      .catch(() => {});
  }, []);

  function close() {
    setVisible(false);
  }

  function hideToday() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem(STORAGE_KEY, tomorrow.toISOString());
    setVisible(false);
  }

  function handleImageClick(popup: Popup) {
    if (popup.link_url) {
      window.open(popup.link_url, "_blank", "noopener,noreferrer");
    }
  }

  if (!visible || popups.length === 0) return null;

  const popup = popups[current];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      {/* Modal */}
      <div className="relative z-10 max-w-sm w-full bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors"
          aria-label={t("close")}
        >
          ×
        </button>

        {/* Image */}
        <div
          className={`relative aspect-[4/5] overflow-hidden ${popup.link_url ? "cursor-pointer" : ""}`}
          onClick={() => handleImageClick(popup)}
        >
          <Image
            src={popup.image_url}
            alt={popup.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Multiple popup indicators */}
        {popups.length > 1 && (
          <div className="flex justify-center gap-1.5 py-2 bg-white">
            {popups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-[#C05010]" : "bg-[#D4DAE2]"
                }`}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#D4DAE2] bg-white">
          <button
            onClick={hideToday}
            className="text-xs text-[#5C6470] hover:text-[#2d2a28] tracking-wide transition-colors"
          >
            {t("hideToday")}
          </button>
          <button
            onClick={close}
            className="text-xs text-[#2d2a28] hover:text-[#C05010] tracking-wide transition-colors"
          >
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}
