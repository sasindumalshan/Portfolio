import Image from "next/image";
import Binary_img from "@/public/bg-img/binary.png";
import profile from "@/public/bg-img/PROFILE.png";
import CvDownloadButton from "./CvDownloadButton";
import AutoSmoothCarousel from "./home/ImageCarousel";
import SocialMediaButton from "./home/SocialMediaButton";
import Icon_Linkin from "@/public/icon/icon-linkedin.png";
import Icon_Github from "@/public/icon/icon-github.png";

export default function HomeSection() {
    return (
        <section className="flex justify-center gap-4">
            <section className="bg-radial-[at_50%_50%] from-indigo-600 to-transparent to-70%   flex flex-row justify-center gap-4 relative w-fit">
                {/* <Image src={Binary_img} alt="Binary Background" className="absolute opacity-50" height={500}/> */}

                {/* <Image src={Binary_img} alt="Binary Background " className="absolute opacity-20 h-full"/> */}
                <section className="flex justify-center flex-col gap-4 justify-center">
                    <h1 className="text-6xl text-white">Hi,</h1>
                    <h1 className="text-7xl font-semibold font-poppins bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        I&apos;m SASINDU
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        I&apos;m a
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-3xl">full-stack developer</span>
                        <br/>
                        with a passion for creating beautiful and functional web applications.
                    </p>

                    <div className="flex flex-row gap-4">
                        <SocialMediaButton icon={Icon_Linkin.src} text="LinkedIn" />
                        <SocialMediaButton icon={Icon_Github.src} text="GitHub" />
                    </div>

                    <AutoSmoothCarousel />
                </section>
                <section className="z-10 flex flex-col gap-2">
                    <Image src={profile}
                        alt="Profile"
                        height={300}
                        width={300}/>
                    <p style={
                            {color: "var(--paragraph-color"}
                        }
                        className="text-lg font-poppins max-w-xl mb-4">
                        I&apos;m a passionate software engineer who loves building web applications 
                                            and exploring new technologies. Welcome to my portfolio, where I share 
                                            my projects and ideas!
                    </p>
                    <CvDownloadButton/>


                </section>
            </section>
        </section>
    );
}
