import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LandingPageBackground from "@/components/landing-page-background"
import Header from "@/components/header"

export default function Home() {
  return (
    <LandingPageBackground>
      <div className="min-h-screen relative text-white">
        {/* Header */}
        <Header />
        <div className="absolute top-5 right-5 flex space-x-4">
          <Link href="/login">
            <Button className="text-base">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="text-base bg-green-600 hover:bg-green-700">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Page content */}
        <main className="flex-1 flex items-center justify-center pt-64">
          <div className="flex flex-col items-center space-y-12 px-6">
            {/* Hero */}
            <div className="max-w-2xl text-center space-y-4">
              <h1 className="text-6xl font-medium">
                Finance Collaboration in Real Time with AI
              </h1>
              <p className="text-base text-gray-100 mt-6">
                Collaborate on investment strategies and get AI-powered insights in real time.
              </p>
              <div className="flex space-x-4 justify-center mt-4">
                <Button className="text-base bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                </Button>
                <Button className="text-white text-base border-gray-300 hover:text-gray-300">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-36">
              <div className="p-4 bg-gray-950 border border-gray-800 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-medium">Shared Dashboards</h3>
                <p className="text-base text-gray-300">
                  Build and review portfolio views together. Track holdings, allocations and performance.
                </p>
              </div>
              <div className="p-4 bg-gray-950 border border-gray-800 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-medium">AI Insights</h3>
                <p className="text-base text-gray-300">
                  Receive smart recommendations, risk alerts and optimization tips as you plan.
                </p>
              </div>
              <div className="p-4 bg-gray-950 border border-gray-800 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-medium">Scenario Simulation</h3>
                <p className="text-base text-gray-300">
                  Model market scenarios and forecast outcomes before making decisions.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LandingPageBackground>
  )
}
