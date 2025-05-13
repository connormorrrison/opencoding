"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import React from "react"

interface ScrollFadeProps {
  children: React.ReactNode
  start?: number      // scrollY at which fading starts
  end?: number        // scrollY at which it's fully gone
  maxOffset?: number  // max upward movement in px
}

export default function ScrollFade({
  children,
  start = 0,
  end = 300,
  maxOffset = 60,
}: ScrollFadeProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1)
  const opacity = 1 - progress
  const translateY = progress * maxOffset

  return (
    <motion.div
      style={{
        opacity,
        transform: `translateY(-${translateY}px)`,
      }}
      className="transition-all duration-300 ease-out will-change-transform"
    >
      {children}
    </motion.div>
  )
}
