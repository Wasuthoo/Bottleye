"use client";
import { useState } from "react";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return (
            <img key={i} src={s} />
          );
        })}
      </div>

      <div className="  bottom-5 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
