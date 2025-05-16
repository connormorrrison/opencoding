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
  MoveUpLeft
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
      {/* sidebar card */}
      <Card
        onClick={togglePinned}
        className={`
          fixed top-24 left-8 bottom-8 flex flex-col bg-black
          transition-all ease-in-out duration-200
          ${isPinned ? "w-48 p-5" : "w-20 p-5 pr-3"}
          rounded-3xl
        `}
      >
        {/* … */}
      </Card>
  
      {/* content-card wrapper handles fixed positioning */}
      <div
        className={`
          fixed top-24 bottom-8 right-8
          transition-all ease-in-out duration-200
          ${isPinned ? "left-60" : "left-32"}
        `}
      >
        {/* Card itself is relative so the arrow can position against it */}
        <Card className="relative h-full p-5 rounded-3xl bg-black">
          <MoveUpLeft className="absolute top-6 left-6" size={24} />
          {/* your content goes here */}
        </Card>
      </div>
    </div>
  )
}
