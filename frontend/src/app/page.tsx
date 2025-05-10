import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Header */}
      <header>
        <div className="absolute top-5 right-5 flex space-x-4">
          <a
            href="#"
            className="px-1 py-1 text-lg rounded-full hover:text-gray-500"
          >
            Login
          </a>
          <a
            href="#"
            className="px-6 py-1 text-lg text-white bg-blue-700 border rounded-full hover:bg-blue-500"

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
