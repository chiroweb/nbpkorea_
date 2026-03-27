"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "ko", label: "KR" },
    { code: "en", label: "EN" },
  ];

  function handleChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          <button
            onClick={() => handleChange(l.code)}
            disabled={isPending}
            className={`text-xs tracking-[0.12em] transition-opacity ${
              locale === l.code
                ? "opacity-100 font-medium"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-xs opacity-20">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
