"use client";

import React from "react";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo"; // Import the modified component

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Advisor",
    image: "https://i.postimg.cc/JhC6pcRn/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
  },
  {
    name: "Jane Smith",
    role: "Admissions Specialist",
    image: "https://i.postimg.cc/JhC6pcRn/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
  },
  {
    name: "Robert Johnson",
    role: "Student Success Manager",
    image: "https://i.postimg.cc/JhC6pcRn/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
  },
  {
    name: "Emily Davis",
    role: "Visa & Immigration Expert",
    image: "https://i.postimg.cc/JhC6pcRn/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
  },
  {
    name: "Michael Brown",
    role: "Partnerships Coordinator",
    image: "https://i.postimg.cc/JhC6pcRn/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
  },
];

const TeamSectionGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={`container mx-auto py-10 ${className}`}
    >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
            <BackgroundGradientDemo
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
            />
            ))}
        </div>
    </div>
  );
};

export default TeamSectionGrid;
