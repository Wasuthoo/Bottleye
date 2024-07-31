"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Navheader from '../../_components/Navheader';

import axios from 'axios';

export default function Water() {
  
  useEffect(() => {
    const postnumber = async () => {
      
      const now = new Date();
      const bangkokTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
      
      const formattedDate = bangkokTime.toISOString().split('T')[0];
      const formattedTime = bangkokTime.toTimeString().split(' ')[0];
      
      console.log(formattedTime);
  
      const dataToSend = {
        bottle_number: 0,
        date: formattedDate,
        time: formattedTime,
  
      };
      
      await axios.post('http://127.0.0.1:8000/store/', dataToSend);
  
    }

    postnumber();
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/home');
  };

  return (
    <main className="bg-background h-screen">
      <Navheader />
      <div className="w-[600px] h-[1000px] m-auto text-center">
        <img src="/success.svg" />
        <button onClick={handleClick} className="text-3xl bg-blue-500 hover-bg-blue-700 text-white font-bold p-6 m-4 rounded-full">
          next
        </button>
      </div>
    </main>
  );
}
