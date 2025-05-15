// src/components/sidebar.tsx
"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Home, SquareTerminal, LayoutGrid, Rocket, Settings } from 'lucide-react'

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const HOVER_THRESHOLD = 200

  const menuItems: {
    name: string
    path: string
    icon: React.ComponentType<{ className?: string }>
  }[] = [
    { name: 'Home',     path: '/',          icon: Home     },
    { name: 'Editor',   path: '/about',     icon: SquareTerminal    },
    { name: 'Projects', path: '/projects',  icon: LayoutGrid   },
    { name: 'Deploy',   path: '/blog',      icon: Rocket   },
    { name: 'Settings', path: '/curations', icon: Settings },
  ]

  const handleSidebarClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).tagName !== 'A' &&
      !e.currentTarget.querySelector('.theme-toggle')?.contains(e.target as Node)
    ) {
      setIsPinned(!isPinned)
      setIsVisible(isPinned || isHovered)
    }
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isPinned) {
        const nearEdge = e.clientX <= HOVER_THRESHOLD
        setIsHovered(nearEdge)
        setIsVisible(nearEdge)
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [isPinned])

  return (
    <div ref={sidebarRef} className="relative h-full">
      {/* main sidebar card */}
      <Card
        onClick={handleSidebarClick}
        className={`
          fixed top-24 left-8 bottom-8
          flex flex-col w-48 p-5 rounded-lg
          shadow-[0_0_300px_rgba(64,46,207,0.2)]
          transition-all duration-300
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
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
                    className="flex items-center px-2 py-2 rounded-lg text-base font-normal hover:text-indigo-500 hover:bg-indigo-800/30"
                  >
                    <Icon className="size-5" />
                    <span className="ml-6">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Card>

      {/* new large card spanning to the right edge */}
      <Card
        className="
          fixed top-24 left-64 right-8 bottom-8
          p-5 rounded-lg
          transition-all duration-300
          opacity-100
        "
      >
        {/* your content goes here */}
      </Card>
    </div>
  )
}
