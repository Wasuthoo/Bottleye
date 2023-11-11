"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import 'next/navigation' instead of 'next/navigation'
import axios from 'axios';
import Navheader from '@/components/Navheader';

export default function Start() { // Renamed to 'Start' with an uppercase letter


  const router = useRouter();
  const apiUrl = 'http://127.0.0.1:8000/capture';


  useEffect(() => {
    const fetchData = async () => {
      console.log("call api");

      axios
        .get(apiUrl)
        .then((response) => {
          const result = response.data.result;
          if (result === 1) {
            router.push('/deposit/nowater');
          } else {
            router.push('/deposit/water');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // You can handle errors here, e.g., by showing an error message
        });
    }
    fetchData();



  }, []);


  return (
    <main className="bg-background h-screen">

      <Navheader />
      <div className='text-center'>
        {/* <h1 className='text-5xl text-center font-bold text-white p-6'>{count}</h1> */}
        <div>
        </div>
        <div className="relative">
          <img src="/icon_bottle.svg" className="animate-spin m-auto h-48 w-48 text-center" />
        </div>
        <img src="/please_wait.svg" className="w-48 h-48 m-auto text-center" />

        {/* <h1 className='text-center font-bold text-white'>กรุณารอซักครู่</h1>
        <h1 className='text-center font-bold text-white'>ระบบกำลังตรวจสอบขวดน้ำ</h1> */}
      </div>
    </main>
  );
};
