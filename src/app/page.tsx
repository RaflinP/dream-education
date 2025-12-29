"use client"; // Add this line

import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import React, { Suspense } from "react"; // Add Suspense
import { ParticlesDemo } from "./components/ParticlesDemo";
import { Footer } from "./components/Footer";
import { HeaderDemo } from "./components/HeaderDemo"; // Import the new HeaderDemo component
import { AnimatedTabsDemo } from "./components/AnimatedTabsDemo"; // Import AnimatedTabsDemo
import TeamSectionGrid from "./components/TeamSectionGrid"; // Import TeamSectionGrid
import { DemoOne } from "./components/DemoOne"; // Import DemoOne
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"; // Import InteractiveHoverButton


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-slate-950">
      <HeaderDemo /> {/* Render the new HeaderDemo component here */}
      <div className="absolute inset-0 -z-10">
        <ParticlesDemo />
      </div>

      <LampContainer>
        <div className="relative flex flex-col items-center place-items-center text-center">
          <Image
            src="https://i.postimg.cc/BQbckQfh/Artboard_1_copy.png"
            alt="Dream Education Limited Logo"
            width={350}
            height={350}
            className="mb-0"
          />
          <p className="text-white uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Dream Education Limited
          </p>
          <h1 className="text-white relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
            Your UK University Journey Starts <InteractiveHoverButton text="Here" />
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-80 max-w-2xl mx-auto mt-4">
            Your pathway to world-class UK education begins here. Tailored support for Romanian & Slovakian students.
          </p>
        </div>
      </LampContainer>

      <Suspense fallback={<div>Loading Tabs...</div>}>
        <AnimatedTabsDemo />
      </Suspense>

      <TeamSectionGrid className="my-20" />
      <DemoOne />

      <Footer />
    </main>
  );
}