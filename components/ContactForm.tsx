"use client";
import { useState } from "react";
import Image from "next/image";

import Image_Arrow from "@/public/icon/arrow.png";
import Image_Gmail from "@/public/icon/icon-gmail.png";
import Image_Gmail_BW from "@/public/icon/contact/icon-mail.png";
import Image_WhatsApp_BW from "@/public/icon/contact/icon-whatsapp-logo.png";
import Image_Map_BW from "@/public/icon/contact/icon-location.png";
import Image_Phone_BW from "@/public/icon/contact/icon-phone-call.png";
import ModernButton from "./common/ModernButton";

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

type FormErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

export default function ContactForm() {
    const [response, setResponse] = useState<ApiResponse | null>(null);
    const [formData, setFormData] = useState<ContactFormSubmitData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        setResponse(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            const data = await res.json();
            setResponse(data);

            if (data.status === "success") {
                setShowSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setShowSuccess(false), 5000);
            }
        } catch (error) {
            setResponse({
                status: "error",
                message: "Failed to send message. Please try again.",
                receivedData: { name: "", email: "", message: "" }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub", href: "https://github.com/sasindumalshan" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg", alt: "Facebook", href: "https://www.facebook.com/sasindu.malshan.12" },
        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/sasindu-malshan-738790267" },
        { icon: "https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg", alt: "Phone", href: "https://wa.me/+94770659786?text=Hello!%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20really%20interested%20in%20your%20work.%20Is%20this%20a%20good%20time%20to%20connect%20and%20discuss%20further%3F" },
    ];

    const contactInfo = [
        { icon: Image_Gmail_BW, text: "sasindu.malshan2001@gmail.com", alt: "Gmail" },
        { icon: Image_WhatsApp_BW, text: "+94 77 0659786", alt: "WhatsApp" },
        { icon: Image_Map_BW, text: "Galle, Sri Lanka", alt: "Location" },
        { icon: Image_Phone_BW, text: "+94 77 0659786", alt: "Phone" },
    ];

    return (
        <div id="contact" className="w-full px-4 md:px-10 lg:px-20 py-12 bg-[#181818]/80 mt-8">
            {/* Title */}
            <div className="mb-12">
                <div className="border-t-2 border-white w-20 mb-3"></div>
                <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight">
                    Let&apos;s work together
                </h1>
                <p className="text-white/60 text-lg mt-4">
                    Have a project in mind? Let&apos;s discuss how we can help.
                </p>
            </div>

            {/* Content */}
            <section className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Left */}
                <section className="lg:w-1/2 space-y-8">
                    <div>
                        <h2 className="font-semibold text-white text-2xl md:text-3xl mb-4">
                            Get in touch with me
                        </h2>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
                        </p>
                    </div>

                    {/* Social icons */}
                    <div>
                        <h3 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wider">
                            Connect with me
                        </h3>
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.alt}
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            ))}
                            <a
                                href="mailto:sasindumalshan@gmail.com"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                            >
                                <Image src={Image_Gmail} alt="Gmail" width={24} height={24} />
                            </a>

                        </div>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wider">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={index}
                                    className="text-white/70 flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                                >
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Image
                                            src={contact.icon}
                                            alt={contact.alt}
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <span className="text-sm md:text-base">{contact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right - Form */}
                <section className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-[#1f1f1f]/60 to-[#181818]/60 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10">
                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm animate-fade-in">
                                ✓ Message sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {response?.status === "error" && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                                ✕ {response.message}
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full bg-transparent text-white placeholder:text-white/40 border-b-2 ${errors.name ? "border-red-500" : "border-white/20"
                                        } focus:border-white py-3 outline-none transition-colors duration-300`}
                                    type="text"
                                    placeholder="Enter your name *"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-2">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full bg-transparent text-white placeholder:text-white/40 border-b-2 ${errors.email ? "border-red-500" : "border-white/20"
                                        } focus:border-white py-3 outline-none transition-colors duration-300`}
                                    type="email"
                                    placeholder="Your email address *"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs mt-2">{errors.email}</p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div>
                                <input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full bg-transparent text-white placeholder:text-white/40 border-b-2 ${errors.subject ? "border-red-500" : "border-white/20"
                                        } focus:border-white py-3 outline-none transition-colors duration-300`}
                                    type="text"
                                    placeholder="Subject *"
                                />
                                {errors.subject && (
                                    <p className="text-red-400 text-xs mt-2">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full bg-transparent text-white placeholder:text-white/40 border-b-2 ${errors.message ? "border-red-500" : "border-white/20"
                                        } focus:border-white py-3 outline-none resize-none transition-colors duration-300`}
                                    rows={5}
                                    placeholder="Write me a message *"
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-400 text-xs mt-2">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            {/* <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="group relative flex items-center gap-3 text-white font-medium px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Image
                                            src={Image_Arrow}
                                            alt="Arrow"
                                            width={18}
                                            height={18}
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </>
                                )}
                            </button> */}
                            <ModernButton
                                text="Send Message"
                                onClick={handleSubmit}
                                variant="gradient"
                                size="lg"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}