// src/components/sidebar.tsx

"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  // Ref to sidebar container (not strictly needed here but kept for consistency)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Distance threshold in px for hover-trigger
  const HOVER_THRESHOLD = 200

  const menuItems = [
    { name: 'Home',      path: '/'        },
    { name: 'Editor',     path: '/about'   },
    { name: 'Projects',  path: '/projects'},
    { name: 'Deploy',      path: '/blog'    },
    { name: 'Settings', path: '/curations'    },
  ]

  // Toggle pinned state on click (ignoring clicks on links or the theme toggle)
  const handleSidebarClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).tagName !== 'A' &&
      !e.currentTarget.querySelector('.theme-toggle')?.contains(e.target as Node)
    ) {
      setIsPinned(!isPinned)
      if (isPinned && !isHovered) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
  }

  // Show/hide on hover when unpinned, using the updated threshold
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isPinned) {
        const isNearLeftEdge = e.clientX <= HOVER_THRESHOLD
        setIsHovered(isNearLeftEdge)
        setIsVisible(isNearLeftEdge)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isPinned])

  return (
    <div ref={sidebarRef} className="relative h-full">
      <Card
        onClick={handleSidebarClick}
        className={`
          fixed top-24 left-8 bottom-8
          flex flex-col 
          w-48 
          p-5 
          rounded-lg 
          hover:shadow-[0_0_300px_rgba(64,46,207,0.2)] 
          transition-all duration-300 
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
        `}
      >

        {/* Navigation */}
        <nav className="flex-2">
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-2 py-2 rounded-lg text-base text-white font-normal hover:text-indigo-500 hover:bg-indigo-800/30"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </Card>
    </div>
  )
}