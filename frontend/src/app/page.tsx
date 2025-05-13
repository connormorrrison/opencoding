"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import LandingPageBackground from "@/components/landing-page-background"
import Header from "@/components/header"
import SlideUp from "@/components/slide-up"
import { Users, Brain, Rocket } from "lucide-react"

const WORDS = ["Collaborate", "Brainstorm", "Develop", "Ship"]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % WORDS.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <LandingPageBackground>
      <div className="min-h-screen relative text-white">
        {/* Header */}
        <div className="relative z-50">
          <Header />
        </div>

        {/* Auth links */}
        <div className="absolute top-5 right-5 flex space-x-4 z-50">
          <Link href="/login">
            <Button className="text-base">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button className="text-base bg-indigo-700 hover:bg-indigo-800">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Page content */}
        <main className="flex-1 flex items-center justify-center pt-62">
          <SlideUp>
            <div className="flex flex-col items-center space-y-12 px-6">
              {/* Hero */}
              <div className="max-w-2xl text-center space-y-4">
                <div className="text-6xl font-medium leading-tight">
                  <div className="whitespace-nowrap h-[72px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={WORDS[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block"
                      >
                        {WORDS[index]}
                      </motion.span>
                    </AnimatePresence>{" "}
                    in Real-Time
                  </div>
                  <div>with AI</div>
                </div>

                <p className="text-base text-gray-100 mt-6">
                  Build software together and get AI-powered insights without losing flow.
                </p>

                <div className="flex space-x-4 justify-center mt-4">
                  <Button className="text-base bg-indigo-700 hover:bg-indigo-800">
                    Get Started
                  </Button>
                  <Button className="text-white text-base border-gray-300 hover:text-gray-300">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                <div className="p-5 bg-black border border-gray-700 rounded-lg">
                  <Users className="h-7 w-7 text-indigo-700 mb-4" />
                  <h3 className="text-lg font-medium">Pair Programming</h3>
                  <p className="text-base text-gray-300">
                    Code together in real time and stay in sync across your team.
                  </p>
                </div>

                <div className="p-5 bg-black border border-gray-700 rounded-lg">
                  <Brain className="h-7 w-7 text-indigo-700 mb-4" />
                  <h3 className="text-lg font-medium">AI Code Assistance</h3>
                  <p className="text-base text-gray-300">
                    Get smart suggestions, refactors, and docs generation as you type.
                  </p>
                </div>

                <div className="p-5 bg-black border border-gray-700 rounded-lg">
                  <Rocket className="h-7 w-7 text-indigo-700 mb-4" />
                  <h3 className="text-lg font-medium">Instant Deploys</h3>
                  <p className="text-base text-gray-300">
                    One-click preview links so you can ship faster and gather feedback early.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </main>
      </div>
    </LandingPageBackground>
  )
}
