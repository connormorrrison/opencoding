import React from "react";
import "./styles/gradient.css";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 h-20">
        {/* Logo in top-left (unchanged) */}
        <div className="absolute top-6 left-6">
          <a href="#" className="px-1 py-1 text-xl">
            <span className="text-white">Open</span>
            <span className="text-blue-700">Coding_</span>
          </a>
        </div>
        {/* Auth links in top-right (unchanged) */}
        <div className="absolute top-5 right-5 flex space-x-0">
          <a
            href="#"
            className="px-5 py-1 text-lg rounded-full hover:text-gray-300 text-white border-gray-300"
          >
            Login
          </a>
          <a
            href="#"
            className="px-5 py-1 text-lg border rounded-full hover:text-gray-300 text-white border-gray-300"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Page content - moved down with padding-top */}
      <main className="flex-1 flex items-center justify-center pt-64">
        <div className="flex flex-col items-center space-y-12 px-6">
          {/* Hero */}
          <div className="max-w-2xl text-center space-y-4">
            <h1 className="text-6xl font-medium">
              Collaborate in Real Time with AI
            </h1>
            <p className="text-base text-gray-100">
              Write better code faster with live teamwork and intelligent AI assistance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="px-5 py-2 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="px-5 py-2 border border-gray-300 rounded-full text-white hover:text-gray-300 transition"
              >
                Watch Demo
              </a>
            </div>
          </div>
          {/* Features */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-medium">Live Collaboration</h3>
              <p className="text-sm text-gray-300">
                Work together on the same codebase. See edits, cursors, and comments instantly.
              </p>
            </div>
            <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-medium">AI-Powered Suggestions</h3>
              <p className="text-sm text-gray-300">
                Get smart completions, bug alerts, and refactoring tips as you type.
              </p>
            </div>
            <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-medium">Natural-Language to Code</h3>
              <p className="text-sm text-gray-300">
                Describe what you need and watch AI turn it into working code.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}