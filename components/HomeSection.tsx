'use client'
import Image from "next/image";
import Binary_img from "@/public/bg-img/INRODhanumaiMinumai-ezgif.com-video-to-webp-converter.webp";
import profile from "@/public/bg-img/PROFILE.png";
import CvDownloadButton from "./CvDownloadButton";
import AutoSmoothCarousel from "./home/ImageCarousel";
import SocialMediaButton from "./home/SocialMediaButton";
import Icon_LinkedIn from "@/public/icon/icon-linkedin.png";
import Icon_Github from "@/public/icon/icon-github.png";
import Icon_Youtube from "@/public/icon/icon-youtube.png";
import Icon_Devil from "@/public/icon/devil.png";

export default function HomeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src={Binary_img}
            alt="Binary background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text + Social + Carousel */}
          <div className="flex flex-col items-start gap-8 md:gap-10 order-2 lg:order-1">
            {/* Intro Text */}
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-slide-up">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    SASINDU
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
                </span>
              </h1>

              <div className="space-y-3">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 animate-slide-up delay-100">
                  Full-Stack Developer
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed animate-slide-up delay-200">
                  Passionate about crafting beautiful, fast, and user-focused web applications with modern technologies and creative solutions.
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 animate-slide-up delay-300">
              <SocialMediaButton icon={Icon_LinkedIn.src} text="LinkedIn" />
              <SocialMediaButton icon={Icon_Github.src} text="GitHub" />
              <SocialMediaButton icon={Icon_Youtube.src} text="YouTube" />
            </div>

            {/* Download CV Button */}
            <div className="animate-slide-up delay-400">
              <CvDownloadButton />
            </div>

            {/* Tech Stack Carousel */}
            <div className="w-full mt-4 animate-fade-in delay-500">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Tech Stack
              </h3>
              <AutoSmoothCarousel />
            </div>
          </div>

          {/* Right - Profile + About + YouTube Promo */}
          <div className="flex flex-col items-center lg:items-end gap-8 order-1 lg:order-2">
            {/* Profile Image with Floating Animation */}
            <div className="relative group animate-float">
              {/* Glowing ring effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={profile}
                  alt="Sasindu Profile"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm transform group-hover:scale-110 transition-transform">
                Available for hire
              </div>
            </div>

            {/* About Text */}
            <div className="text-center lg:text-right space-y-4 max-w-lg px-4 lg:px-0">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate software engineer who loves building modern web applications and exploring cutting-edge technologies. Welcome to my portfolio — here I share my projects, ideas, and journey through the world of code.
              </p>
            </div>

            {/* YouTube Promo Card */}
            <div>
            
              <a
              href="https://youtube.com/@devil-gc6nn?si=MHfRj7B9JpUuiYtA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md group transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Channel Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur-md opacity-50"></div>
                      <Image
                        src={Icon_Devil.src}
                        alt="Devil Icon"
                        width={72}
                        height={72}
                        className="relative rounded-xl border-2 border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Image
                          src={Icon_Youtube.src}
                          alt="YouTube"
                          width={32}
                          height={32}
                          className="animate-pulse"
                        />
                        <h3 className="text-2xl font-bold text-white">Devil</h3>
                      </div>
                      <p className="text-sm text-gray-400">Creative Coding & Tech</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded-full">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          Live Channel
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Video Embed */}
                  <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-white/10 shadow-lg group-hover:border-white/20 transition-colors">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/y72Kcu2NGmY?si=vc-bVUargy-sM-AV"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  {/* Subscribe CTA */}
                  <div className="mt-5 text-center">
                    <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform group-hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}