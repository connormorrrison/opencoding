"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import LandingPageBackground from "@/components/landing-page-background"
import Header from "@/components/header"
import SlideUp from "@/components/slide-up"
import {
  Users,
  Brain,
  BarChart4
} from "lucide-react"


const WORDS = [
  "Collaboration", // people align first
  "Discovery",     // explore data and context
  "Analysis",      // examine patterns
  "Insights",      // surface key findings
  "Strategy",      // set high-level direction
  "Planning",      // map concrete steps
  "Simulation",    // test scenarios
  "Optimization"   // refine for best results
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(i => (i + 1) % WORDS.length), 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <LandingPageBackground>
      <div className="min-h-screen relative text-white">
        {/* Header */}
        <div className="relative z-50">
          <Header />
        </div>
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
              <div className="text-6xl font-medium leading-tight text-center">
              <div>Real-Time Coding</div>
              <div className="whitespace-nowrap h-[72px]">
                <span>
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
                  with AI
                </span>
              </div>
            </div>

                <p className="text-base text-gray-100 mt-6">
                  Collaborate on software development and get AI-powered insights in real-time.
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <Button className="text-base bg-indigo-700 hover:bg-indigo-800 text-white">
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
                  <h3 className="text-lg font-medium">Collaborative Portfolios</h3>
                  <p className="text-base text-gray-300">
                    Explore, build, and monitor portfolios as a team. Share ideas and track real-time performance together.
                  </p>
                </div>
                <div className="p-5 bg-black border border-gray-700 rounded-lg">
                  <Brain className="h-7 w-7 text-indigo-700 mb-4" />
                  <h3 className="text-lg font-medium">AI Investment Intelligence</h3>
                  <p className="text-base text-gray-300">
                    Surface relevant insights, identify opportunities, and get smarter about your next move.
                  </p>
                </div>
                <div className="p-5 bg-black border border-gray-700 rounded-lg">
                  <BarChart4 className="h-7 w-7 text-indigo-700 mb-4" />
                  <h3 className="text-lg font-medium">What-If Modeling</h3>
                  <p className="text-base text-gray-300">
                    Run simulations to see how strategies might perform. Stress test ideas before acting.
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
