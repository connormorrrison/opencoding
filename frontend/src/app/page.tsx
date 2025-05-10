import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Header */}
      <header>
        {/* Logo in top-left */}
        <div className="absolute top-6 left-6">
          <a href="#" className="px-1 py-1 text-xl">
            <span className="text-blue-700">OpenCoding</span>
          </a>
        </div>

        {/* Auth links in top-right */}
        <div className="absolute top-5 right-5 flex space-x-4">
          <a
            href="#"
            className="px-5 py-1 text-lg border rounded-full hover:text-gray-500"
          >
            Login
          </a>
          <a
            href="#"
            className="px-5 py-1 text-lg border rounded-full hover:text-gray-500"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 flex items-center justify-center">
        {/* ... */}
      </main>
    </div>
  );
}
