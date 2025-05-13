import React from "react";
import Header from "@/components/header";
import SlideUp from "@/components/slide-up";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 relative">
      <Header />

      <SlideUp>
      {/* Card */}
      <div className="w-full max-w-md space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Sign Up
          </h1>
          <p className="text-md text-gray-400">
            Create your OpenCoding account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-base font-medium text-gray-300">
              First Name*
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First Name"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-base font-medium text-gray-300">
              Last Name*
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last Name"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-medium text-gray-300">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-base font-medium text-gray-300">
              Password*
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Password"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-300">
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirm Password"
              className="block w-full rounded-md border-0 bg-white/5 py-3 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-700 py-3 text-base font-semibold shadow-sm hover:bg-indigo-800"
          >
            Sign Up
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-base text-gray-400">
          Already a member?{" "}
          <a href="/login" className="font-semibold text-indigo-700 hover:text-indigo-800">
            Log in
          </a>
        </p>
      </div>
    </SlideUp>
    </div>
  )
}
