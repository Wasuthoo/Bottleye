"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navheader from '../_components/Navheader';

const Start: React.FC = () => {
  const router = useRouter();
  const apiUrl = 'http://127.0.0.1:8000/capture';

  useEffect(() => {
    const fetchData = async () => {
      console.log("call api");

      try {
        const response = await axios.get(apiUrl);
        const result = response.data.result;
        if (result === 1) {
          router.push('/deposit/nowater');
        } else {
          router.push('/deposit/water');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // You can handle errors here, e.g., by showing an error message
      }
    };
    fetchData();
  }, [router]);

  return (
    <main className="bg-background h-screen">
      <Navheader />
      <div className='text-center'>
        <div></div>
        <div className="relative">
          <img src="/icon_bottle.svg" className="animate-spin m-auto h-48 w-48 text-center" alt="Spinning bottle icon" />
        </div>
        <img src="/please_wait.svg" className="w-48 h-48 m-auto text-center" alt="Please wait icon" />
      </div>
    </main>
  );
};

export default Start;
