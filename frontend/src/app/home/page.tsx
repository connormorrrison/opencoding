'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/auth';

export default function HomePage() {
  const router = useRouter();

  // block unauthenticated visitors
  useEffect(() => {
    if (!getToken()) router.replace('/login');
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center text-white">
    </main>
  );
}
