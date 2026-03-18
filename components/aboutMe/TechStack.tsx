'use client';

import { useEffect, useState } from 'react';

const TechStack = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <section className="w-full px-4 md:px-10 lg:px-20 mt-20">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="lg:w-[320px] lg:flex-shrink-0 space-y-6">
                    {/* Title Section */}
                    <section>
                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full mb-4 shadow-lg shadow-emerald-500/50"></div>
                        <h1 className="font-bold text-white text-4xl md:text-5xl mb-3 tracking-tight">
                            Tech Stack
                        </h1>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Technologies and tools I use to design, build, and deploy scalable software solutions.
                        </p>
                    </section>

                    {/* Currently Working With */}
                    <section className="bg-[#171717] border-2 border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300">
                        <h2 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            Currently Working With
                        </h2>
                        <ul className='space-y-2.5'>
                            {['Java', 'JavaScript', 'TypeScript', 'Dart'].map((lang) => (
                                <li key={lang} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                                    <svg className="w-4 h-4 text-emerald-500 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">{lang}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Current Project */}
                    <section className="bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/20 rounded-xl p-5">
                        <h2 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Currently Working On
                        </h2>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Building a comprehensive portfolio website that showcases my skills and projects with modern technologies.
                        </p>
                    </section>
                </div>

                {/* Right Grid - All cards same width */}
                <div className="flex-1 flex flex-wrap gap-6">
                    {/* Card 1: Programming Languages */}
                    <TechCard 
                        title="Programming Languages"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        }
                        items={[
                            { name: "Java", icon: "devicon-java-plain colored", color: "text-orange-500" },
                            { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "text-yellow-400" },
                            { name: "TypeScript", icon: "devicon-typescript-plain colored", color: "text-blue-500" },
                            { name: "Dart", icon: "devicon-dart-plain colored", color: "text-blue-400" }
                        ]}
                    />

                    {/* Card 2: Frontend Development */}
                    <TechCard 
                        title="Frontend Development"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                        items={[
                            { name: "HTML", icon: "devicon-html5-plain colored", color: "text-orange-600" },
                            { name: "CSS", icon: "devicon-css3-plain colored", color: "text-blue-600" },
                            { name: "React", icon: "devicon-react-original colored", color: "text-cyan-400" },
                            { name: "Redux", icon: "devicon-redux-original colored", color: "text-purple-500" },
                            { name: "Electron", icon: "devicon-electron-original colored", color: "text-blue-300" },
                            { name: "Flutter", icon: "devicon-flutter-plain colored", color: "text-blue-400" }
                        ]}
                    />

                    {/* Card 3: Backend Development */}
                    <TechCard 
                        title="Backend Development"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                        }
                        items={[
                            { name: "Spring Boot", icon: "devicon-spring-plain colored", color: "text-green-500" },
                            { name: "Node.js", icon: "devicon-nodejs-plain colored", color: "text-green-600" },
                            { name: "Express.js", icon: "devicon-express-original colored", color: "text-gray-300" }
                        ]}
                    />

                    {/* Card 4: Databases & Caching */}
                    <TechCard 
                        title="Databases & Caching"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                        }
                        items={[
                            { name: "MySQL", icon: "devicon-mysql-plain colored", color: "text-blue-700" },
                            { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", color: "text-blue-400" },
                            { name: "MongoDB", icon: "devicon-mongodb-plain colored", color: "text-green-600" },
                            { name: "Redis", icon: "devicon-redis-plain colored", color: "text-red-600" }
                        ]}
                    />

                    {/* Card 5: DevOps & Cloud */}
                    <TechCard 
                        title="DevOps & Cloud"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        }
                        items={[
                            { name: "Docker", icon: "devicon-docker-plain colored", color: "text-blue-500" },
                            { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", color: "text-blue-600" },
                            { name: "AWS", icon: "devicon-amazonwebservices-plain colored", color: "text-orange-500" }
                        ]}
                    />

                    {/* Card 6: Architecture & Concepts */}
                    <TechCard 
                        title="Architecture & Concepts"
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        }
                        items={[
                            { name: "Modular Architecture", icon: "fas fa-cubes", color: "text-purple-500" },
                            { name: "MVC / Layered", icon: "fas fa-layer-group", color: "text-green-500" },
                            { name: "System Decoupling", icon: "fas fa-unlink", color: "text-blue-500" }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const TechCard = ({ 
    title, 
    items, 
    icon 
}: {
    title: string;
    items: { name: string; icon: string; color: string }[];
    icon: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#171717] rounded-xl p-6 border-2 border-white/10
                hover:border-emerald-500/50 hover:bg-[#1f1f1f]
                hover:scale-[1.02] transition-all duration-500
                min-h-[300px] w-[300px]
                hover:shadow-2xl hover:shadow-emerald-500/10 group relative overflow-hidden
                h-fit flex flex-col"
        >
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

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {icon}
                </div>
                <h3 className="text-white font-bold text-lg flex-1">
                    {title}
                </h3>
            </div>

            {/* Animated divider */}
            <div className="relative mb-6 overflow-hidden h-[2px]">
                <div className="absolute inset-0 bg-white/5" />
                <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                    style={{
                        width: isHovered ? '100%' : '0%',
                        transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                />
            </div>

            {/* Items List */}
            <ul className="space-y-3 relative z-10 flex-1">
                {items.map((item) => (
                    <li 
                        key={item.name}
                        className="flex items-center gap-3 rounded-lg p-2 -mx-2
                            hover:bg-white/5 transition-all duration-200 group/item"
                    >
                        {/* Icon Container */}
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                            bg-white/5 group-hover/item:bg-white/10
                            group-hover/item:scale-110 transition-all duration-200`}>
                            <i className={`${item.icon} text-lg`}></i>
                        </div>

                        {/* Technology Name */}
                        <span className="text-neutral-300 font-medium group-hover/item:text-white transition-colors flex-1 text-sm">
                            {item.name}
                        </span>

                        {/* Chevron indicator */}
                        <svg className="w-4 h-4 text-neutral-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                ))}
            </ul>

            {/* Footer Stats */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-neutral-400">Active</span>
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                    {items.length} {items.length === 1 ? 'technology' : 'technologies'}
                </div>
            </div>
        </div>
    );
};

export default TechStack;