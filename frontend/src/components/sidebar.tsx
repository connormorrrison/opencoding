// src/components/sidebar.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  Home,
  SquareTerminal,
  LayoutGrid,
  Rocket,
  Settings,
} from "lucide-react"

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)

  const menuItems = [
    { name: "Home",     path: "/home",         icon: Home     },
    { name: "Editor",   path: "/editor",    icon: SquareTerminal },
    { name: "Projects", path: "/projects", icon: LayoutGrid   },
    { name: "Deploy",   path: "/deploy",     icon: Rocket   },
    { name: "Settings", path: "/settings",icon: Settings },
  ]

  const togglePinned = () => setIsPinned(p => !p)

  return (
    <div className="relative h-full">
      {/* sidebar */}
      <Card
        onClick={togglePinned}
        className={`
          fixed top-24 left-8 bottom-8 flex flex-col
          transition-all duration-300
          ${isPinned ? "w-48 p-5" : "w-20 p-5 pr-3"}
          rounded-lg
        `}
      >
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="
                      flex items-center px-2 py-2
                      rounded-lg text-base font-normal
                      hover:text-indigo-500 hover:bg-indigo-800/30
                    "
                  >
                    <Icon className="size-6" />
                    {isPinned && <span className="ml-6">{item.name}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Card>

      {/* content card */}
      <Card
        className={`
          fixed top-24 bottom-8 right-8 p-5 rounded-lg
          transition-all duration-300
          ${isPinned ? "left-64" : "left-36"}
        `}
      >
        {/* your content goes here */}
      </Card>
    </div>
  )
}
