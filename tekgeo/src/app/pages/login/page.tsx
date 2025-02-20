"use client"

import { useState } from 'react';
import { useRouter } from "next/navigation"
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import TekGeoLogo from '@/components/ui/tekgeoLogo';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Add login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-300 via--500 to-blue-300 px-4">
      
      <Link href="/" className="absolute top-4 left-4 md:top-8 md:left-8">
        <Button  variant="outline" size="icon">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Return to Home</span>
        </Button>
      </Link>
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      </div> */}

      <div className="relative w-full max-w-md rounded-2xl bg-white bg-opacity-10 p-8 shadow-lg backdrop-blur-lg">
      <div className='ml-24'><TekGeoLogo/></div>
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">Sign In</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 placeholder:text-slate-600 rounded-lg border-none bg-white bg-opacity-20 p-3 text-white placeholder-gray-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 placeholder:text-slate-600 rounded-lg border-none bg-white bg-opacity-20 p-3 text-white placeholder-gray-300 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white shadow-lg hover:opacity-80"
          onClick={handleLogin}
        >
          Log In
        </Button>

        <div className="my-4 text-center text-gray-300">or</div>

        <Button
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-white p-3 text-gray-700 shadow-lg hover:bg-gray-200"
        >
          <FcGoogle size={24} /> Sign in with Google
        </Button>
      </div>
    </div>
  );
}
