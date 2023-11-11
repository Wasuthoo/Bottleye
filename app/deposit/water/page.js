"use client";
import { useRouter } from 'next/navigation'; // Import 'useRouter' from 'next/navigation'
import Navheader from '@/components/Navheader';
import React, { useEffect } from 'react';

export default function Water() { // Rename 'water' to 'Water' with an uppercase letter
  const router = useRouter();

  const handleClick = () => {
    // Replace '/your-target-route' with the route you want to navigate to
    router.push('/home');
  };

  return (
    <main className="bg-background h-screen">
      <Navheader />
      <div className="w-96 h-96 m-auto text-center">
        <img src="/fails.svg" />
        <button
          onClick={handleClick}
          className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold p-6 m-4 rounded-full"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
