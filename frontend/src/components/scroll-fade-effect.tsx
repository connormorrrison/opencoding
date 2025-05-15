"use client"
import { useEffect, useState } from "react"

export default function ScrollFadeEffect() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const progress = Math.min(scrollY / 200, 1) // adjust 200 to control fade length
  const opacity = progress * 1

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "300px", // makes fade more gradual
        pointerEvents: "none",
        background: `linear-gradient(to bottom, rgba(0,0,0,${opacity}) 0%, transparent 100%)`,
        zIndex: 40,
      }}
    />
  )
}
