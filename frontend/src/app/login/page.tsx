'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import SlideUp from '@/components/slide-up';
import PrimaryBackground from '@/components/primary-background';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log('API URL →', process.env.NEXT_PUBLIC_API_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      router.push('/home');
    } else {
      const { errors, message } = await res.json();
      setError(message || errors?.[0]?.msg || 'Login failed');
    }
  };

  const inputClasses =
    'block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10';

  return (
    <PrimaryBackground>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-white">
        <Header />

        <SlideUp>
          <div className="w-full max-w-md space-y-8">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">Log In</h1>
              <p className="text-md text-gray-400">Access your OpenCoding account.</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-base font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className={inputClasses}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-indigo-700"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-base text-gray-400">
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

              <button
                type="submit"
                className="w-full rounded-md bg-indigo-700 py-3 text-base font-semibold shadow-sm hover:bg-indigo-800"
              >
                Log In
              </button>
            </form>

            {error && <p className="text-center text-sm text-red-500">{error}</p>}

            <p className="text-center text-base text-gray-400">
              Not a member?{' '}
              <a href="/signup" className="font-semibold text-indigo-700 hover:text-indigo-800">
                Sign up
              </a>
            </p>
          </div>
        </SlideUp>
      </div>
    </PrimaryBackground>
  );
}
