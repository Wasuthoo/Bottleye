import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {CircularProgress} from "@nextui-org/react";

const Navheader = () => {
  const [bottleNumber, setBottleNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();




  useEffect(() => {
    // Make an Axios request to fetch the bottle number
    async function fetchData() {
      axios.get('http://127.0.0.1:8000/get_count')
      .then(response => {
        // Assuming your API response contains the bottle number
        setBottleNumber(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
    }
    fetchData();
  }, []);
  const handleClick = () => {
    // Replace '/your-target-route' with the route you want to navigate to
    router.push('/dashboard');
  };
  const handleClickhome = () => {
    // Replace '/your-target-route' with the route you want to navigate to
    router.push('/home');
  };


  return (
    <div>
      <img onClick={handleClickhome} src="/home-button-for-interface.png" className="absolute top-20 left-32 w-8 h-8 " />

      <img src="/bottleye_logo.svg" className="w-48 h-48 m-auto text-center" />
      <div className="absolute top-[50px] left-[1400px]">
        <div onClick={handleClick} className="w-[124px] h-[68px] px-[18px] py-1 rounded-[45px] border-4 border-slate-700 justify-end items-center gap-2 inline-flex">
          <img className="w-7 h-[50px]" src="/icon_bottle.svg" />
          {isLoading ? (
            // <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <CircularProgress size="md" aria-label="Loading..."/>
          ) : (
            <div className="w-[52px] text-sky-100 text-[40px] font-medium font-Poppins">
              {bottleNumber}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navheader;
