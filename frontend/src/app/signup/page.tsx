import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          {/* Optional: You can add your logo or a heading here if needed */}
          <h1 className="text-4xl font-semibold tracking-tight">
            Create Account
          </h1>
          <p className="mt-2 text-md text-gray-400">
            Join OpenAlpha to collaborate on investment strategies.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-base font-medium leading-6 text-gray-300"
            >
              First Name*
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-base sm:leading-6"
                placeholder="Enter your first name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-base font-medium leading-6 text-gray-300"
            >
              Last Name*
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-base sm:leading-6"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-gray-300"
            >
              Email*
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-base sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium leading-6 text-gray-300"
            >
              Password*
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-base sm:leading-6"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-base font-medium leading-6 text-gray-300"
            >
              Confirm Password*
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-base sm:leading-6"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-base text-gray-400">
          Already a member?{' '}
          <a href="/login" className="font-semibold leading-6 text-green-400 hover:text-green-300">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}