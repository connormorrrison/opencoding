// app/page.tsx or app/page.js
import React from "react";
import "./styles/gradient.css";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Header */}
      <header>
        {/* Logo in top-left */}
        <div className="absolute top-6 left-6">
          <a href="#" className="px-1 py-1 text-xl">
            <span className="text-white">Open</span>
            <span className="text-blue-700">Coding_</span>
          </a>
        </div>

        {/* Auth links in top-right */}
        <div className="absolute top-5 right-5 flex space-x-0">
          <a
            href="#"
            className="px-5 py-1 text-lg rounded-full hover:text-gray-300 text-white border-gray-300"
          >
            Login
          </a>
          <a
            href="#"
            // Consider changing border and text color for visibility on black
            className="px-5 py-1 text-lg border rounded-full hover:text-gray-300 text-white border-gray-300" // Example adjustments
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 flex items-center justify-center">
        {/* Your page content will go here. Ensure it's visible on a black background. */}
        {/* For example, if you had text here, you might add className="text-white" */}
      </main>
    </div>
  );
}