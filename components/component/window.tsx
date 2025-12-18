import React from "react";
import Marquee from "../ui/marquee";
import { ReviewCard, reviews } from "./review";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Window = () => {
  return (
    <div className="w-full h-fit border border-gray-300 rounded-2xl overflow-hidden max-w-4xl shadow-xl flex flex-col bg-white dark:bg-[#1E1E1E]">
      {/* Header ala macOS */}
      <div className="border-b bg-[#F5F5F7] dark:bg-[#2C2C2E] py-3 px-6 flex items-center gap-x-4">
        {/* Tombol Kontrol ala Mac */}
        <div className="flex items-center gap-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full border border-red-700 hover:bg-red-400 cursor-pointer" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full border border-yellow-700 hover:bg-yellow-400 cursor-pointer" />
          <div className="w-3 h-3 bg-green-500 rounded-full border border-green-700 hover:bg-green-400 cursor-pointer" />
        </div>
        {/* Judul Window */}
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">
          <span className="hidden md:inline">Portfolio<span className="mx-3">\\</span></span>
          <span className="text-gray-900 dark:text-white">Happy Clients!</span>
        </p>
      </div>

      {/* Konten Window */}
      <div className="w-full h-auto aspect-video flex flex-col justify-center relative bg-white dark:bg-[#1C1C1E] py-8">
        {/* Pola Dot Pattern */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        {/* Marquee Baris Pertama */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Marquee Baris Kedua (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden md:flex">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Marquee Tambahan */}
        <Marquee pauseOnHover className="[--duration:20s] hidden md:flex">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Window;
