import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-black text-white">
        <main>
          {children}
        </main>
        <footer className="text-center py-5 text-gray-300 text-base">
          © {new Date().getFullYear()} OpenCoding. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
