"use client";
import {useState} from "react";
import Image from "next/image";

import Image_Arrow from "@/public/icon/arrow.png";
import Image_Gmail from "@/public/icon/icon-gmail.png";
import Image_Gmail_BW from "@/public/icon/contact/icon-mail.png";
import Image_WhatsApp_BW from "@/public/icon/contact/icon-whatsapp-logo.png";
import Image_Map_BW from "@/public/icon/contact/icon-location.png";
import Image_Phone_BW from "@/public/icon/contact/icon-phone-call.png";

type ApiResponse = {
    status: string;
    message: string;
    receivedData: {
        name: string;
        email: string;
        message: string;
    };
};

type ContactFormSubmitData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [response, setResponse] = useState < ApiResponse | null > (null);
    const [formData, setFormData] = useState < ContactFormSubmitData > ({name: "", email: "", subject: "", message: ""});

    const handleInputChange = (e : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {name: formData.name, email: formData.email, subject: formData.subject, message: formData.message}
            )
        });

        const data = await res.json();
        setResponse(data);
    };

    return (
        <div className="w-full px-4 md:px-10 lg:px-20">
            {/* Title */}
            <div className="mb-8">
                <div className="border-t-2 border-white w-20 mb-2"></div>
                <h1 className="font-semibold text-white text-3xl md:text-4xl">
                    Let&apos;s work together
                </h1>
            </div>

            {/* Content */}
            <section className="flex flex-col lg:flex-row gap-10">
                {/* Left */}
                <section className="lg:w-1/2 space-y-6">
                    <h2 className="font-semibold text-white text-xl md:text-2xl">
                        Get in touch with me
                    </h2>

                    <p className="text-white/70 text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    sapiente rem perspiciatis sequi atque eaque nihil perferendis.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-4 flex-wrap">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub"
                            width={28}
                            height={28}/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg" alt="Facebook"
                            width={28}
                            height={28}/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn"
                            width={28}
                            height={28}/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" alt="Twitter"
                            width={28}
                            height={28}/>
                        <Image src={Image_Gmail}
                            alt="Gmail"
                            width={28}
                            height={28}/>
                    </div>

                    {/* Contact info */}
                    <div className="space-y-3 text-sm md:text-base">
                        <p className="text-white/70 flex items-center gap-2">
                            <Image src={Image_Gmail_BW}
                                alt="Email"
                                width={18}
                                height={18}/>
                            sasindumalshan@gmail.com
                        </p>
                        <p className="text-white/70 flex items-center gap-2">
                            <Image src={Image_WhatsApp_BW}
                                alt="WhatsApp"
                                width={18}
                                height={18}/>
                            +94 77 123 4567
                        </p>
                        <p className="text-white/70 flex items-center gap-2">
                            <Image src={Image_Map_BW}
                                alt="Location"
                                width={18}
                                height={18}/>
                            Galle, Sri Lanka
                        </p>
                        <p className="text-white/70 flex items-center gap-2">
                            <Image src={Image_Phone_BW}
                                alt="Phone"
                                width={18}
                                height={18}/>
                            +94 77 123 4567
                        </p>
                    </div>
                </section>

                {/* Right - Form */}
                <section className="lg:w-1/2 bg-[#181818] p-6 md:p-8 rounded-2xl space-y-8">
                    <input name="name"
                        value={
                            formData.name
                        }
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white placeholder:text-white/60 border-b border-white py-2 outline-none"
                        type="text"
                        placeholder="Enter your name"/>
                    <input name="email"
                        value={
                            formData.email
                        }
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white placeholder:text-white/60 border-b border-white py-2 outline-none"
                        type="email"
                        placeholder="Your email address"/>
                    <input name="subject"
                        value={
                            formData.subject
                        }
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white placeholder:text-white/60 border-b border-white py-2 outline-none"
                        type="text"
                        placeholder="Subject"/>
                    <textarea name="message"
                        value={
                            formData.message
                        }
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-white placeholder:text-white/60 border-b border-white py-2 outline-none resize-none"
                        rows={4}
                        placeholder="Write me a message"></textarea>

                    <button onClick={handleSubmit}
                        className="flex items-center gap-3 text-white border-b border-white pb-1 hover:opacity-80 transition">
                        Contact With Me
                        <Image src={Image_Arrow}
                            alt="Arrow"
                            width={18}
                            height={18}/>
                    </button>
                </section>
            </section>
        </div>
    );
}
