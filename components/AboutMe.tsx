import Image from "next/image"
import profileImage from "@/public/bg-img/PROFILE.png"
import TechStack from "./aboutMe/TechStack"

import userIcon from "@/public/icon/icon-contact-info.png"
import companyIcon from "@/public/icon/icon-company.png"
import AboutChatBot from "./aboutMe/AboutChatBot"

const AboutMe = () => {
    const BIRTH_DATE = "2001-06-23"

    function calculateAge(birthDate: string): number {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <section className="w-full px-4 md:px-10 lg:px-20">
            <div className="border-t-2 border-white w-20 mb-2"></div>
            <h1 className="font-semibold text-white text-3xl md:text-4xl">
                About Me
            </h1>
            <section className="mt-10 flex flex-col lg:flex-row items-center gap-10">

                {/* Image */}
                <div className="flex-shrink-0">
                    <Image src={profileImage}
                        alt="Profile"
                        width={300}
                        height={300}
                        className="rounded-2xl object-cover" />
                </div>

                <section>
                    {/* <h1 className="font-semibold text-white text-2xl md:text-3xl ">More About Me</h1> */}
                    <section className="mt-4 flex flex-wrap items-start gap-2 flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src={userIcon} alt="User" width={24} height={24} />
                            <span className="font-semibold text-white text-lg">Personal Info</span>
                        </div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Name: <span className="text-white font-semibold ml-2">Sasindu Malshan</span></div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Age: <span className="text-white font-semibold ml-2">{calculateAge(BIRTH_DATE)}</span></div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Location: <span className="text-white font-semibold ml-2">Sri Lanka, Galle, Gintota</span></div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Currently: <span className="text-white font-semibold ml-2">Focused on opportunities</span></div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Civil Status: <span className="text-white font-semibold ml-2">Single </span></div>

                        <div className="flex items-center gap-2 my-2">
                            <Image src={companyIcon} alt="Company" width={24} height={24} />
                            <span className="font-semibold text-white text-lg">Professional Info</span>
                        </div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Currently Work at: <span className="text-white font-semibold ml-2">INTTELEON (Pvt) Ltd [at 2024]</span></div>
                        <div className="rounded-md bg-white/10 p-4 text-white/90">Currently Position: <span className="text-white font-semibold ml-2">Associate Software Engineer</span></div>
                    </section>
                </section>

                {/* Text */}
                <div className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl bg-black/50 py-9 px-6 rounded-md">
                    <p className="text-xl">
                        <span className="text-white text-2xl font-semibold">
                            Hello, I'm Sasindu Malshan
                        </span>
                        , a Software Engineer and Music Producer. I'm currently focused on growing in the Machine Learning direction while strengthening my foundation in full-stack development.
                    </p>

                    <p className="text-gray-500 mt-4 text-md">
                        I&apos;m also self-aware about my weaknesses. I tend to overthink at times,
                        especially when I care deeply about the quality of my work, and I can
                        initially be cautious when trusting people. However, I&apos;ve learned to
                        turn this into a strength by being more analytical, detail-oriented,
                        and intentional in my decisions.
                        <br /><br />
                        What defines me most is my mindset: I&apos;m always eager to learn,
                        comfortable with change, and motivated by solving real problems.
                    </p>
                </div>

            </section>
            <AboutChatBot />
        </section>
    )
}

export default AboutMe


