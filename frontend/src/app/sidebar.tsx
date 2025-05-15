// app/sidebar.tsx
"use client"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function SidebarWrapper({
  children
}: {
  children: ReactNode
}) {
  const path = usePathname()
  const hidden = ["/", "/login", "/signup"].includes(path)
  
  if (hidden) {
    return <>{children}</>
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
