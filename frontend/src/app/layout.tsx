// app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"
import SidebarWrapper from "./sidebar"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black text-white">
        <SidebarWrapper>
          {children}
        </SidebarWrapper>
      </body>
    </html>
  )
}
