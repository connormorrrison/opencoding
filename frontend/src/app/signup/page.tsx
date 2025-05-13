import React from "react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 h-20">
        <div className="absolute top-6 left-6">
          <Link href="/" className="px-1 py-1 text-xl">
            <span className="text-white">Open</span>
            <span className="text-green-500">
              Alpha<sup className="text-base">α</sup>
            </span>
          </Link>
        </div>
      </header>

      {/* Card */}
      <div className="w-full max-w-md space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Create Account
          </h1>
          <p className="text-md text-gray-400">
            Join OpenAlpha to collaborate on investment strategies.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-base font-medium text-gray-300"
            >
              First Name*
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First Name"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-base font-medium text-gray-300"
            >
              Last Name*
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last Name"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-300"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-300"
            >
              Password*
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Password"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-base font-medium text-gray-300"
            >
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirm Password"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2.5 text-base font-semibold shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            Sign Up
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-base text-gray-400">
          Already a member?{" "}
          <a
            href="/login"
            className="font-semibold text-green-400 hover:text-green-300"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
