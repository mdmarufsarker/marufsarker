"use client";

import Image from "next/image";
import { code, typing } from "/public/";
import { ChangeEvent, useState } from "react";

export default function Codeforces() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <section className="container mx-auto flex flex-col gap-7 justify-center h-[70vh] items-center">
      <div className="flex flex-row justify-center items-center my-auto h-96 p-8">
        <div className="flex flex-col h-72 justify-between">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl w-[400px]">
              {title}
            </h2>
            <h2 className="text-2xl">
              {/* convert the time to 12 hour bdt time and print it in the format */}
              {time}
            </h2>
          </div>
          <div>
            <button className="bg-red-500 px-4 py-2 rounded">CPS Academy</button>
          </div>
        </div>
        <Image src={typing} width={400} alt="Contest Template"></Image>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="title">Enter Title</label>
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            className="border-none outline-none text-xl rounded text-black px-2"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="time">Enter Time</label>
          <input
            type="text"
            onChange={handleTime}
            value={time}
            className="border-none outline-none text-xl rounded text-black px-2"
          />
        </div>
      </div>
    </section>
  );
}
