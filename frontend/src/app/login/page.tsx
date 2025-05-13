import React from "react";
import Header from "@/components/header"; // Assuming your Header component is in this path

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 relative">
      <Header />

      {/* Card */}
      <div className="w-full max-w-md space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Log In
          </h1>
          <p className="text-md text-gray-400">
            Access your OpenAlpha account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
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
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:leading-6"
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
              autoComplete="current-password"
              required
              placeholder="Password"
              className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:leading-6"
            />
          </div>

          {/* Optional: Remember me and Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-base text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-base">
              <a href="/forgot-password" className="font-semibold text-green-400 hover:text-green-300">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-3 text-base font-semibold shadow-sm hover:bg-green-700"
          >
            Log In
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-base text-gray-400">
          Not a member?{" "}
          <a href="/signup" className="font-semibold text-green-400 hover:text-green-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}