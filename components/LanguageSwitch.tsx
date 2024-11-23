"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded ${
          language === "en"
            ? "bg-primary text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-2 py-1 rounded ${
          language === "ja"
            ? "bg-primary text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        JP
      </button>
    </div>
  );
}