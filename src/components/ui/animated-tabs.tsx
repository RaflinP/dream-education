"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "About us",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <img
          src="https://i.postimg.cc/Z5bnh679/414342-PDTRP3-756.jpg"
          alt="Tab 1"
          className="rounded-lg w-full h-full object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />

        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-0 mt-0 !m-0">
            About us
          </h2>
          <p className="text-sm mt-0">
            Dream Education Limited is dedicated to guiding Romanian and Slovakian students through their journey to top UK universities. We provide expert advice, comprehensive support, and personalized strategies to help you achieve your academic goals.
          </p>
          <br />
          <h3 className="text-xl font-bold mb-0 mt-0 !m-0">What We Offer</h3>
          <p className="text-sm mt-2">
            At Dream Education Limited, we pride ourselves on delivering a holistic approach to university admissions. Our process is designed to simplify every stage of your application, from initial consultations to securing your place at a prestigious UK institution. We ensure that every student receives the attention and resources needed to succeed, fostering a strong foundation for their academic and professional future. Our commitment extends beyond just admissions; we aim to build lasting relationships and support our students throughout their educational journey.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "What we do",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <img
          src="https://i.postimg.cc/Z5bnh679/414342-PDTRP3-756.jpg"
          alt="Tab 2"
          className="rounded-lg w-full h-full object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-0 mt-0 !m-0">
            What we do
          </h2>
          <p className="text-sm mt-0">
            At Dream Education Limited, our core mission is to facilitate your successful admission to a UK university. We begin with a personalized assessment to understand your academic profile, aspirations, and preferred fields of study. Our expert advisors then assist with selecting suitable courses and institutions, ensuring your application stands out.
          </p>
          <p className="text-sm mt-2">
            This includes meticulous guidance on crafting compelling personal statements, preparing for interviews, and navigating the UCAS application system. Beyond admissions, we provide invaluable support for visa applications, accommodation arrangements, and pre-departure orientations, covering everything from cultural adjustments to academic expectations.
          </p>
          <p className="text-sm mt-2">
            Our comprehensive approach ensures that you are well-prepared, confident, and excited to embark on your UK university journey.
          </p>
        </div>
      </div>
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div
      className={cn("w-full max-w-6xl flex flex-col gap-y-1", className)}
    >
      <div className="flex gap-2 flex-wrap bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm rounded-lg outline-none transition-colors",
              activeTab === tab.id ? "bg-white shadow-md" : "bg-black shadow-sm" // Conditional background for the button itself
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] backdrop-blur-sm !rounded-lg" // Active state background matches selected button
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className={cn(
                "relative z-10 font-bold", // Always bold
                activeTab === tab.id ? "text-black" : "text-white" // Conditional text styling
            )}>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-white text-black dark:bg-[#11111198] dark:text-white bg-opacity-50 backdrop-blur-sm rounded-xl border min-h-[32.5rem] h-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
