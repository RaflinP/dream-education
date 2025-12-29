"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export function BackgroundGradientDemo({ name, role, image }: TeamMemberCardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt={name}
          height="400"
          width="400"
          className="object-contain"
        />
        <h2 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {role}
        </p>
      </BackgroundGradient>
    </div>
  );
}