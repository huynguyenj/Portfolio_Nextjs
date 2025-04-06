"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
const listText: string[] = ["Nguyen Le Gia Huy", "Front-end developer"];
export default function HeroSection() {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % listText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex flex-col sm:flex-row items-center px-5 h-[85vh] mt-15">
      <div className="w-[100%] sm:w-[50%] lg:ml-20 mx-auto mt-10 sm:-mt-20">
        <h1 className="text-6xl lg:text-8xl mb-3 font-bold">Hello all,</h1>
        <p className="text-4xl mb-3">Welcome to my portfolio</p>
        <div className="text-[1.5em] lg:text-4xl mb-3 flex overflow-hidden h-[1.3em] lg:h-[1.2em] gap-4">
          I am a{" "}
            <div
              style={{ transform: `translateY(-${index * 100}%)` }}
              className={`duration-300 ease-in-out transition-transform text-purple-600 font-bold `}
            >
              {listText.map((word, i) => (
                <div key={i} className="h-[1em] mb-2">{word}</div>
              ))}
          </div>
        </div>
        <p className="text-[1.1rem]">I am a passion person in coding and ready to learn, adapt any tech, environments. Having experience in building website and using many frameworks like: Reactjs, Nextjs. Always be ready for any situations.</p>
      </div>
      <div className="w-[100%] sm:w-[50%] mt-5 sm:-mt-20 flex justify-center items-center p-10 border-amber-50 border-4 rounded-[44%_56%_51%_49%_/_47%_15%_85%_53%]">
        <Image
          src="/assets/Picture.png"
          width={250}
          height={250}
          alt="Avatar picture"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
