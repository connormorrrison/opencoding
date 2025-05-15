'use client'

import * as React from "react"
import {
  Command,
  Home,
  SquareTerminal,
  LayoutGrid,
  Rocket,
  Settings,
  MessageCircleWarning,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Home",     url: "/home", icon: Home,           isActive: true },
    { title: "Editor",   url: "/editor", icon: SquareTerminal          },
    { title: "Projects", url: "/projects", icon: LayoutGrid              },
    { title: "Deploy",   url: "/deploy", icon: Rocket                  },
    { title: "Settings", url: "/settings", icon: Settings                },
  ],
  navSecondary: [
    { title: "Report an issue", url: "#", icon: MessageCircleWarning },
  ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      {/* SidebarHeader is left empty now that “Acme Inc” is removed */}
      <SidebarHeader />

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
