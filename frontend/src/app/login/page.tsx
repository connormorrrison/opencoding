"use client";

import React from "react";
import Header from "@/components/header";
import SlideUp from "@/components/slide-up";
import PrimaryBackground from "@/components/primary-background";

export default function LoginPage() {
  return (
    <PrimaryBackground>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-white">
        <Header />

        <SlideUp>
          {/* Card */}
          <div className="w-full max-w-md space-y-8">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">Log In</h1>
              <p className="text-md text-gray-400">
                Access your OpenCoding account.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
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
                  className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
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
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-indigo-700 hover:text-indigo-800"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-base text-gray-400"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-base font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-700 py-3 text-base font-semibold shadow-sm hover:bg-indigo-800"
              >
                Log In
              </button>
            </form>

            {/* Footer link */}
            <p className="text-center text-base text-gray-400">
              Not a member?{" "}
              <a
                href="/signup"
                className="font-semibold text-indigo-700 hover:text-indigo-800"
              >
                Sign up
              </a>
            </p>
          </div>
        </SlideUp>
      </div>
    </PrimaryBackground>
  );
}
