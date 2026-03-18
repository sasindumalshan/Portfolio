"use client";
import Image from "next/image";
import { useState } from "react";
import School from "@/public/icon/education/icon-school.png";
import Location from "@/public/icon/education/icon-location.png";
import Calendar from "@/public/icon/education/icon-calendar.png";
import SchoolIcon from "@/public/icon/education/icon-school-buildng.png";
import EducationViewPopup from "./EducationViewPopup";

const STATUS = {
  PENDING: {
    card: "bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-600/40 hover:border-slate-500/60 hover:from-slate-800/60 hover:to-slate-700/40",
    badge: "bg-slate-700/40 text-slate-300 border-slate-600/50",
    icon: "border-slate-500/50",
    accent: "from-slate-400 to-slate-600"
  },
  COMPLETED: {
    card: "bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-600/40 hover:border-blue-500/50 hover:from-slate-800/60 hover:to-blue-900/20",
    badge: "bg-blue-600/30 text-blue-300 border-blue-500/40",
    icon: "border-blue-500/60",
    accent: "from-blue-400 to-blue-600"
  },
  FAILED: {
    card: "bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-600/40 hover:border-slate-500/60 hover:from-slate-800/60 hover:to-slate-700/40",
    badge: "bg-slate-700/40 text-slate-400 border-slate-600/50",
    icon: "border-slate-500/50",
    accent: "from-slate-400 to-slate-600"
  },
};

function EducationCard({
  title,
  institution,
  status,
  year,
  location,
  setIsHovered,
  isHovered,
  setIsPopupOpen
}: {
  title: string;
  institution: string;
  status: keyof typeof STATUS;
  year: string;
  location: string | null;
  setIsHovered: (value: boolean) => void;
  isHovered: boolean;
  setIsPopupOpen: (value: boolean) => void;

}) {
  

  const statusText = status === "COMPLETED" ? "Completed" : status === "PENDING" ? "Pending" : "Discontinued";
  const theme = STATUS[status];

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl ${theme.card} p-6 w-full max-w-[400px] relative border-2 backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/40
        group cursor-pointer overflow-hidden`}
    >
      {/* Subtle shine effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
        <div className={`absolute inset-0 bg-gradient-to-tr ${theme.accent} opacity-5`} />
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{
            transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease-out'
          }}
        />
      </div>

      {/* Decorative corner icon */}
      <div className={`w-12 h-12 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl absolute top-[-12px] left-[-12px] 
        flex justify-center items-center border-2 ${theme.icon} shadow-xl
        group-hover:scale-110 transition-all duration-300 z-50`}>
        <Image src={School} alt="School" width={24} height={24} className="group-hover:scale-110 transition-transform duration-300 brightness-110" />
      </div>

      {/* Status badge */}
      <div className="absolute top-5 right-5 z-10">
        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${theme.badge}
          group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm`}>
          {statusText}
        </span>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="font-bold text-white text-xl md:text-2xl mt-8 mb-3 
          group-hover:text-white transition-colors duration-300 leading-tight">
          {title}
        </h2>

        {/* Animated divider line */}
        <div className="relative mb-5 overflow-hidden h-[3px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
          <div 
            className={`h-full bg-gradient-to-r ${theme.accent} rounded-full shadow-lg`}
            style={{
              width: isHovered ? '100%' : '0%',
              transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isHovered ? '0 0 20px rgba(100, 149, 237, 0.4)' : 'none'
            }}
          />
        </div>

        {/* Details section */}
        <section className="flex flex-col gap-3.5 pl-4 py-2 border-l-2 border-slate-600/40
          group-hover:border-slate-500/60 transition-all duration-500">
          
          <p className="text-slate-300 flex items-start gap-3 group-hover:text-white transition-colors duration-300 leading-relaxed">
            <Image src={SchoolIcon} alt="School" width={20} height={20} className="mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="flex-1 text-sm font-medium">{institution}</span>
          </p>

          <span className="text-slate-400 flex items-center gap-3 group-hover:text-slate-300 transition-colors duration-300 text-sm">
            <Image src={Calendar} alt="Calendar" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            {year}
          </span>

          {location && (
            <span className="text-slate-400 flex items-center gap-3 group-hover:text-slate-300 transition-colors duration-300 text-sm">
              <Image src={Location} alt="Location" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              {location}
            </span>
          )}
        </section>

        {/* View Details button */}
        <section className="flex justify-end mt-6">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="relative px-6 py-2.5 rounded-xl font-semibold text-sm
              bg-slate-700/40 text-slate-300 border border-slate-600/50
              hover:bg-slate-600/50 hover:text-white hover:border-slate-500/70
              transition-all duration-300 overflow-hidden group/btn backdrop-blur-sm
              shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Details
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
              translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          </button>
        </section>
      </div>
    </section>
  );
}

export default function Education() {
  const educationData = [
    {
      title: "Ordinary Level",
      year: "(2007 - 2017)",
      institution: "G/Gintota Central College",
      location: "Gintota, Sri Lanka",
      status: "COMPLETED" as keyof typeof STATUS,
    },
    {
      title: "Advanced Level",
      year: "(2018 - 2020)",
      institution: "D.R. Richarch Pathirana College, Galle",
      location: "Uluwitike, Galle, Sri Lanka",
      status: "FAILED" as keyof typeof STATUS,
    },
    {
      title: "Software Engineering (HND)",
      year: "(2020 - 2022)",
      institution: "IJSE Institute (Institute of Software Engineering)",
      location: "Galle, Sri Lanka",
      status: "COMPLETED" as keyof typeof STATUS,
    },
    {
      title: "Computer Science (BSc)",
      year: "(2026 - ...)",
      institution: "Pending",
      location: null,
      status: "PENDING" as keyof typeof STATUS,
    },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 mt-20">
      {/* Header */}
      <div className="mb-12">
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-4 shadow-lg shadow-blue-500/50"></div>
        <h1 className="font-bold text-white text-4xl md:text-5xl mb-3 tracking-tight">
          Education
        </h1>
        <p className="text-slate-400 mt-2 max-w-2xl text-lg leading-relaxed">
          My educational background and qualifications.
        </p>
      </div>
      {isPopupOpen && <EducationViewPopup onClose={() => setIsPopupOpen(false)} />}
      
      {/* Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            title={education.title}
            institution={education.institution}
            status={education.status}
            year={education.year}
            location={education.location}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
            setIsPopupOpen={setIsPopupOpen}
          />
        ))}
      </section>
    </section>
  );
}