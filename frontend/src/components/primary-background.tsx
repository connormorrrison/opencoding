"use client";

import React, { PropsWithChildren } from "react";

export default function PrimaryBackground({
  children,
}: PropsWithChildren<{}>) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* central gradient shadow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(64,46,207,0.2) 0%, transparent 200%)",
        }}
      />
      {children}
    </div>
  );
}
