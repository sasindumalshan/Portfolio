"use client";

import { useState } from "react";

const qaList = [
  {
    q: "Who are you?",
    a: "I’m Sasindu Malshan, a passionate Full Stack Developer focused on building modern, scalable web applications.",
  },
  {
    q: "What technologies do you work with?",
    a: "I mainly work with React, Next.js, Node.js, Tailwind CSS, and REST APIs.",
  },
  {
    q: "Do you have a degree?",
    a: "I don’t have a formal degree, but I have over 2 years of hands-on industry experience.",
  },
  {
    q: "What kind of projects have you built?",
    a: "I’ve built POS systems, dashboards, portfolio websites, and real-world business applications.",
  },
  {
    q: "Are you open to remote work?",
    a: "Yes, I’m open to remote and international opportunities.",
  },
];

export default function AboutChatBot() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl space-y-4">
      <h2 className="text-2xl font-semibold text-white">
        💬 About Me (Chat Style)
      </h2>

      {/* Questions */}
      <div className="flex flex-wrap gap-2">
        {qaList.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            {item.q}
          </button>
        ))}
      </div>

      {/* Answer Box */}
      {activeIndex !== null && (
        <div className="rounded-md bg-white/10 p-4 border border-white/20">
          <p className="text-sm text-white/60">
            Q: {qaList[activeIndex].q}
          </p>
          <p className="mt-2 text-white font-medium">
            A: {qaList[activeIndex].a}
          </p>
        </div>
      )}
    </div>
  );
}
