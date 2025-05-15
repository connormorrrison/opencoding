"use client";

import React, { useEffect, useRef } from "react";

export default function SlideUpEffect({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.classList.remove("opacity-0", "translate-y-10");
      el.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <div
      ref={ref}
      className="flex w-full justify-center opacity-0 translate-y-10 transition-all duration-300 ease-out"
    >
      {children}
    </div>
  );
}
