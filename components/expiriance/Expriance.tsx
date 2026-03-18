"use client";
import { useState } from "react";

function Experience() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 mt-20">
      {/* Header */}
      <div className="mb-12">
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full mb-4 shadow-lg shadow-emerald-500/50"></div>
        <h1 className="font-bold text-white text-4xl md:text-5xl mb-3 tracking-tight">
          Experience
        </h1>
        <p className="text-neutral-400 mt-2 max-w-2xl text-lg leading-relaxed">
          Things I&apos;ve built, contributed & learned along the way 🚀
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        <ExperienceCard
          title="Associate Software Engineer"
          company="INTELLEON"
          period="2024 – 2025"
          location="Sri Lanka"
          responsibilities={[
            {
              text: "Worked as a Software Engineer Intern, contributing to real-world production systems.",
              highlight: "Software Engineer Intern"
            },
            {
              text: "Involved in a long-term Australian Loan Application project to streamline loan processing and client management.",
              highlight: "Australian Loan Application"
            },
            {
              text: "Handled full stack development – frontend UI development and backend API implementation.",
              highlight: "full stack development"
            },
            {
              text: "Collaborated with cross-functional teams to introduce new features and improve overall system performance.",
              highlight: null
            },
            {
              text: "Assisted in designing and developing software applications following industry best practices.",
              highlight: null
            },
            {
              text: "Contributed to a Task Management System for a Sri Lankan equipment maintenance company.",
              highlight: "Task Management System"
            },
            {
              text: "Helped streamline motor repair tracking, daily task assignments, and progress monitoring.",
              highlight: null
            },
            {
              text: "Later transitioned fully into the Australian loan system, enhancing system functionality and stability.",
              highlight: null
            }
          ]}
          technologies={["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]}
        />
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  location,
  responsibilities,
  technologies
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: Array<{ text: string; highlight: string | null }>;
  technologies: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Decorative corner badge */}
      <div className="w-12 h-12 bg-[#171717] rounded-xl
        absolute -top-4 -left-4 flex justify-center items-center border-2 border-emerald-500/60
        shadow-xl shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 
        transition-all duration-300 z-10">
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <section className="bg-[#171717] backdrop-blur-sm 
        rounded-2xl p-6 md:p-8 border-2 border-white/10
        hover:border-emerald-500/50 hover:bg-[#1f1f1f]
        hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/40
        transition-all duration-500 ease-out overflow-hidden">
        
        {/* Subtle shine effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent" />
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{
              transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)',
              transition: 'transform 0.8s ease-out'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-neutral-300">
                <p className="text-lg font-semibold text-emerald-400">
                  {company}
                </p>
                <span className="text-neutral-500">•</span>
                <span className="text-sm text-neutral-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-neutral-300">{period}</span>
            </div>
          </div>

          {/* Animated divider line */}
          <div className="relative mb-6 overflow-hidden h-[3px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div 
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full shadow-lg"
              style={{
                width: isHovered ? '100%' : '0%',
                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isHovered ? '0 0 20px rgba(52, 211, 153, 0.4)' : 'none'
              }}
            />
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
              Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300 group/item hover:text-white transition-colors">
                  <span className="text-emerald-500 mt-1.5 group-hover/item:scale-125 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1 leading-relaxed">
                    {item.highlight ? (
                      <>
                        {item.text.split(item.highlight)[0]}
                        <span className="text-white font-semibold">{item.highlight}</span>
                        {item.text.split(item.highlight)[1]}
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/5 text-neutral-300 rounded-lg text-sm font-medium
                    border border-white/10 hover:border-emerald-500/50 hover:bg-white/10
                    hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;