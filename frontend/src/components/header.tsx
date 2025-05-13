import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 h-20">
      <div className="absolute top-6 left-6">
        <Link href="/" className="px-1 py-1 text-xl">
          <span className="text-white">Open</span>
          <span className="text-indigo-700">
            Coding<sup className="text-base"></sup>
          </span>
        </Link>
      </div>
    </header>
  )
}
