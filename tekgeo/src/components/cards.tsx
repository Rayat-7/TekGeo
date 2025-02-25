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
    description: "Automate workflows efficiently to reduce manual effort.",
  },
  {
    id: 3,
    title: "Detailed Analytics",
    description: "Gain deep insights with comprehensive analytics.",
  },
];

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-1 gap-6 px-32 p-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <MagicCard
          key={blog.id}
          className="flex flex-col px-6 items-center justify-center p-6 text-center transition-transform duration-300 rounded-xl cursor-pointer hover:scale-[1.02]"
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
