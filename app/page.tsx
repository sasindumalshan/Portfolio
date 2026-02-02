import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import HomeSection from "@/components/HomeSection";
import ThemeToggle from "@/components/ThemeToggle";
import TechStack from "@/components/aboutMe/TechStack";
import Education from "@/components/education/Education";
import Expriance from "@/components/expiriance/Expriance";

export default function Home() {

    return (
      <>
        {/* <Header /> */}
        <main className="mt-16 ">
          <HomeSection />
          <AboutMe />
          <Education />
          <Expriance />
          <TechStack />
          <ContactForm />
          <ThemeToggle />

        </main>
        <footer className="bg-[#181818] p-4 text-center text-white mt-8">
            <p>© {new Date().getFullYear()} Sasindu Malshan. All rights reserved.</p>
          </footer>
      </>
    );
}
