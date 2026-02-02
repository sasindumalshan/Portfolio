'use client';
import { useEffect, useState, useRef } from 'react';

export default function TechStackCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);
  
  // Tech stack with Devicon classes
  const techIcons = [
    { name: "Java", class: "devicon-java-plain colored" },
    { name: "Spring Boot", class: "devicon-spring-plain colored" },
    { name: "Node.js", class: "devicon-nodejs-plain colored" },
    { name: "Express.js", class: "devicon-express-original colored" },
    { name: "HTML", class: "devicon-html5-plain colored" },
    { name: "CSS", class: "devicon-css3-plain colored" },
    { name: "JavaScript", class: "devicon-javascript-plain colored" },
    { name: "TypeScript", class: "devicon-typescript-plain colored" },
    { name: "React", class: "devicon-react-original colored" },
    { name: "Flutter", class: "devicon-flutter-plain colored" },
    { name: "Redux", class: "devicon-redux-original colored" },
    { name: "Redis", class: "devicon-redis-plain colored" },
    { name: "Maven", class: "devicon-maven-plain colored" },
    { name: "NPM", class: "devicon-npm-original-wordmark colored" },
    { name: "Docker", class: "devicon-docker-plain colored" },
    { name: "Kubernetes", class: "devicon-kubernetes-plain colored" },
    { name: "AWS", class: "devicon-amazonwebservices-plain colored" },
    { name: "MySQL", class: "devicon-mysql-plain colored" },
    { name: "MongoDB", class: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", class: "devicon-postgresql-plain colored" }
  ];

 useEffect(() => {
        const scrollContainer = containerRef.current;
        if (!scrollContainer) return;

        const autoScroll = () => {
            if (isScrolling.current) return;
            
            isScrolling.current = true;
            
            // Scroll to the right
            const scrollAmount = 1;
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            
            if (scrollContainer.scrollLeft >= maxScrollLeft - 1) {
                // Reset to start smoothly
                scrollContainer.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
                setCurrentSlide(0);
            } else {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                
                // Update current slide based on scroll position
                const slideWidth = 52; // 50px + 2px gap
                const current = Math.round(scrollContainer.scrollLeft / slideWidth);
                setCurrentSlide(current);
            }
            
            isScrolling.current = false;
        };

        const interval = setInterval(autoScroll, 50); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    // Handle manual hover pause
    const handleMouseEnter = () => {
        isScrolling.current = true;
    };

    const handleMouseLeave = () => {
        isScrolling.current = false;
    };

  return (
    <div className="relative w-[500px] h-[55px] overflow-hidden" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex animate-scroll gap-6 w-max px-4 items-center h-full">
        {techIcons.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center group">
            {/* Devicon Icon */}
            <i className={`${tech.class} text-4xl transition-transform duration-300 group-hover:scale-125`}></i>
            {/* Technology Name (Optional) */}
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </span>
          </div>
        ))}
        {/* Seamless loop සඳහා duplicate set එක */}
        {techIcons.map((tech, index) => (
          <div key={`dup-${index}`} className="flex flex-col items-center justify-center">
            <i className={`${tech.class} text-4xl`}></i>
          </div>
        ))}
      </div>
    </div>
  );
}