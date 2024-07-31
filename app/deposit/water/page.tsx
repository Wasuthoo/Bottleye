"use client";
import { useRouter } from 'next/navigation'; 
import Navheader from '../../_components/Navheader';

import React, { useEffect } from 'react';

export default function Water() {
  const router = useRouter();

  const handleClick = () => {

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
