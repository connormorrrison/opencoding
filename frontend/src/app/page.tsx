"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import LandingPageBackground from "@/components/landing-page-background";
import Header from "@/components/header";
import SlideUp from "@/components/slide-up";
import ScrollFade from "@/components/scroll-fade";
import { Users, Brain, Rocket } from "lucide-react";
import { Faq1 } from "@/components/faq1";

const WORDS = [
  "Collaborate",
  "Brainstorm",
  "Develop",
  "Test",
  "Debug",
  "Review",
  "Automate",
  "Ship",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <LandingPageBackground>
      <div className="relative min-h-screen text-white">
        {/* Header */}
        <div className="fixed inset-x-0 top-0 z-50">
          <Header />
        </div>

        {/* Auth links */}
        <div className="fixed right-5 top-5 z-50 flex space-x-4">
          <Link href="/login">
            <Button className="text-base">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-indigo-700 text-base hover:bg-indigo-800">Sign Up</Button>
          </Link>
        </div>

        {/* Page content */}
        <main className="flex-1 pt-60">
          <SlideUp>
            <div className="flex flex-col items-center space-y-12 px-6">
              {/* Hero */}
              <div className="max-w-2xl space-y-4 text-center">
                <div className="text-6xl font-medium leading-tight drop-shadow-lg">
                  <div className="h-[72px] whitespace-nowrap">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={WORDS[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block rounded-xl border border-indigo-950 px-2 py-2 shadow-[0_0_200px_rgba(64,46,207,0.9)]"
                      >
                        {WORDS[index]}
                      </motion.span>
                    </AnimatePresence>{" "}
                    in Real-Time
                  </div>
                  <div className="mt-4">with AI</div>
                </div>

                <p className="mt-6 text-base text-gray-100">
                  Build software together and get AI-powered insights without losing flow.
                </p>

                <div className="mt-4 flex justify-center space-x-4">
                  <Button className="bg-indigo-700 text-base hover:bg-indigo-800">
                    Get Started
                  </Button>
                  <Button className="border-gray-300 text-base text-white hover:text-gray-300">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="mt-20 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                <div className="rounded-lg border border-gray-600 bg-black p-5 shadow-[0_0_100px_rgba(64,46,207,0.2)]">
                  <Users className="mb-4 h-7 w-7 text-indigo-700" />
                  <h3 className="text-lg font-medium">Pair Programming</h3>
                  <p className="text-base text-gray-300">
                    Code together in real time and stay in sync across your team.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-600 bg-black p-5 shadow-[0_0_100px_rgba(64,46,207,0.2)]">
                  <Brain className="mb-4 h-7 w-7 text-indigo-700" />
                  <h3 className="text-lg font-medium">AI Code Assistance</h3>
                  <p className="text-base text-gray-300">
                    Get smart suggestions, refactors, and docs generation as you type.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-600 bg-black p-5 shadow-[0_0_100px_rgba(64,46,207,0.2)]">
                  <Rocket className="mb-4 h-7 w-7 text-indigo-700" />
                  <h3 className="text-lg font-medium">Instant Deploys</h3>
                  <p className="text-base text-gray-300">
                    One-click preview links so you can ship faster and gather feedback early.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </main>

        {/* FAQ Section */}
        <Faq1 />

        {/* Blur overlay */}
        <ScrollFade />
      </div>
    </LandingPageBackground>
  );
}
