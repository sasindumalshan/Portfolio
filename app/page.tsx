import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ThemeToggle from "@/components/ThemeToggle";
import TechStack from "@/components/aboutMe/TechStack";
import Education from "@/components/education/Education";
import Expriance from "@/components/expiriance/Expriance";
import Image from "next/image";
import Binary_img from "@/public/bg-img/INRODhanumaiMinumai-ezgif.com-video-to-webp-converter.webp";
import ExperienceSection, { ExperienceItem } from "@/components/expiriance/ExperienceSection";

export default function Home() {

  const myExperience: ExperienceItem[] = [
    {
      id: "my-company",
      company: "INTELLEON",
      tagline: "What they do",
      period: "2024 March — 2024 September",
      position: "Software Engineer Intern",
      location: "Negombo, Kochchikade, Sri Lanka",
      description: "I was a part of a team that developed a Desktop application for a client. I was responsible for developing the front-end of the application. I was also responsible for testing the application and ensuring that it was free of bugs. I also worked on developing the back-end of the application. I was responsible for developing the API of the application. I was also responsible for testing the API and ensuring that it was free of bugs.",
      companyDescription: "Intelleon is a leading provider of innovative financial technology solutions. We specialize in developing cutting-edge software applications that streamline business processes and enhance customer experiences. Our team of experienced professionals is dedicated to delivering high-quality products that meet the evolving needs of our clients.",
      technologies: [
        { name: "JavaFX", category: "framework" },
        { name: "Java", category: "language" },
        { name: "Spring Boot", category: "framework" },
        { name: "MySQL", category: "database" },
        { name: "Git", category: "tool" },
        { name: "Dialog SMS Gateway", category: "tool" },
      ],
      projects: [
        {
          name: "Task Management System",
          description: "A desktop application for managing tasks. It provides a user-friendly interface for creating, updating, deleting, and tracking tasks. It also includes features like task prioritization, due dates, and reminders.",
          highlights: [
            "Developed a desktop application for managing tasks using JavaFX and Spring Boot.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking tasks.",
            "Integrated Dialog SMS Gateway for sending task reminders.",
            "Used MySQL for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["JavaFX", "Spring Boot", "MySQL", "Dialog SMS Gateway", "Git"],
        },
        {
          name: "ERP System",
          description: "A web application. It is a comprehensive solution for managing business operations.",
          highlights: [
            "Developed a web application for managing business operations using Spring Boot and MySQL.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking tasks.",
            "Used MySQL for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["React", "Spring Boot", "MySQL", "Git"],
        },
      ],

    },
    {
      id: "my-trainee",
      company: "INTELLEON",
      tagline: "What they do",
      period: "2024 September — 2025 February",
      position: "Software Engineer Trainee",
      location: "Negombo, Kochchikade, Sri Lanka",
      description: "I was a part of a team that developed a Desktop application for a client. I was responsible for developing the front-end of the application. I was also responsible for testing the application and ensuring that it was free of bugs. I also worked on developing the back-end of the application. I was responsible for developing the API of the application. I was also responsible for testing the API and ensuring that it was free of bugs.",
      technologies: [
        { name: "React", category: "framework" },
        { name: "Node.js", category: "framework" },
        { name: "Express.js", category: "framework" },
        { name: "TypeScript", category: "language" },
        { name: "AWS", category: "cloud" }
      ],
      projects: [
        {
          name: "Automated Loan Management System",
          description: "A web application for managing loans. It provides a user-friendly interface for creating, updating, deleting, and tracking loans. It also includes features like loan prioritization, due dates, and reminders.",
          highlights: [
            "Developed a web application for managing loans using React and Spring Boot.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking loans.",
            "Used AWS for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["React", "Spring Boot", "AWS", "Git"],
        }
      ],

    },
    {
      id: "my-ase",
      company: "INTELLEON",
      tagline: "What they do",
      period: "2025 March — present",
      position: "Software Associate Engineer ",
      location: "Moratuwa, Sri Lanka",
      description: "I am currently working as a Software Associate Engineer at Intelleon. I am working on developing a web application for managing loans. It provides a user-friendly interface for creating, updating, deleting, and tracking loans. It also includes features like loan prioritization, due dates, and reminders.",
      technologies: [
        { name: "React", category: "framework" },
        { name: "Node.js", category: "framework" },
        { name: "Express.js", category: "framework" },
        { name: "TypeScript", category: "language" },
        { name: "AWS", category: "cloud" },
        { name: "Electron", category: "framework" },
        { name: "Docker", category: "tool" },
        { name: "System Decoupling", category: "tool" },
        { name: "PostgreSQL", category: "database" },
        { name: "RabbitMQ", category: "tool" },
      ],
      projects: [
        {
          name: "Automated Loan Management System",
          description: "Assigned to back-end development for a single responsible Under the architect guidance. The project involves developing a web application for managing loans. It provides a user-friendly interface for creating, updating, deleting, and tracking loans. It also includes features like loan prioritization, due dates, and reminders.",
          highlights: [
            "Developed a web application for managing loans using React and Spring Boot.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking loans.",
            "Used AWS for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["Node.js", "Express.js", "TypeScript", "AWS", "Git"],
        },
        {
          name: "Restaurant Management System (Desktop Application)",
          description: "Assigned to back-end development for a single responsible Under the architect guidance. The project involves developing a web application for managing loans. It provides a user-friendly interface for creating, updating, deleting, and tracking loans. It also includes features like loan prioritization, due dates, and reminders.",
          highlights: [
            "Developed a web application for managing loans using React and Spring Boot.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking loans.",
            "Used AWS for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["Node.js", "Express.js", "TypeScript", "AWS", "Git"],
        },
        {
          name: "Cheque Management System (Desktop Application)",
          description: "Assigned to back-end development for a single responsible Under the architect guidance. The project involves developing a web application for managing loans. It provides a user-friendly interface for creating, updating, deleting, and tracking loans. It also includes features like loan prioritization, due dates, and reminders.",
          highlights: [
            "Developed a web application for managing loans using React and Spring Boot.",
            "Implemented a user-friendly interface for creating, updating, deleting, and tracking loans.",
            "Used AWS for database management.",
            "Collaborated with a team of developers to deliver a high-quality product.",
          ],
          technologies: ["Node.js", "Express.js", "TypeScript", "AWS", "Git"],
        }
      ],

    },

  ];

  return (
    <>
      {/* Global Background from HomeSection */}
      <div className="fixed inset-0 -z-50 bg-black">
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
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-[1000ms]"></div>
      </div>

      <Header />
      <main className="mt-16 ">
        <HomeSection />
        <AboutMe />
        <Education />
        {/* <Expriance /> */}
        <ExperienceSection items={myExperience} title="MY EXPERIENCE" />
        <TechStack />
        <ContactForm />
        <ThemeToggle />

      </main>
      <footer className="bg-[#181818]/80 backdrop-blur-md p-4 text-center text-white mt-8 border-t border-white/10">
        <p>© {new Date().getFullYear()} Sasindu Malshan. All rights reserved.</p>
      </footer>
    </>
  );
}
