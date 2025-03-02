"use client";

import { useTheme } from "next-themes";

import { MagicCard } from "./magicui/magic-card";

const blogs = [
  {
    id: 1,
    title: "Real-time Tracking",
    description: "Monitor attendance in real-time with our advanced tracking system.",
  },
  {
    id: 2,
    title: "Smart Automation",
    description: "Automate workflows efficiently to reduce manual effort and enhance productivity",
  },
  {
    id: 3,
    title: "Detailed Analytics",
    description: "Gain deep insights with comprehensive analytics and data-driven decision-making",
  },
];

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    // <div className=" px-40 sm:flex flex-col   ">
    //   {blogs.map((blog) => (
    //     <MagicCard
    //       key={blog.id}
    //       className=" my-4  px-6 items-center justify-center p-10 text-center transition-transform duration-300 rounded-xl cursor-pointer hover:scale-[1.02]"
    //       gradientColor={theme === "dark" ? "#1E3A8A" : "#93C5FD"}
    //       style={{ border: "2px solid #3B82F6" }} // Bluish border
    //     >
    //       <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>
    //       <p className="text-sm opacity-80">{blog.description}</p>
    //     </MagicCard>
    //   ))}
    // </div>

    <div className="px-8 mt-14 sm:px-40 sm:flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0 py-8 sm:py-0">
    {blogs.map((blog) => (
      <MagicCard
        key={blog.id}
        className="px-8 py-6 sm:px-6 sm:py-4 flex flex-col items-center justify-center text-center transition-transform duration-300 rounded-xl cursor-pointer hover:scale-[1.02]"
        gradientColor={theme === "dark" ? "#1E3A8A" : "#93C5FD"}
        style={{ border: "2px solid #3B82F6" }} // Bluish border
      >
        <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>
        <p className="text-sm opacity-80">{blog.description}</p>
      </MagicCard>
    ))}
  </div>
  );
}
