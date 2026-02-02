'use client'; // Add this at the very top

import {useEffect} from 'react';

const TechStack = () => { // Add Devicon CSS link
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
        document.head.appendChild(link);

        return() => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <section className="w-full flex flex-row flex-wrap gap-4 px-4 md:px-10 lg:px-20 mt-20">
            {/* Title */}
            <div className="mb-10 w-[300px] flex flex-col gap-3">
                <section>
                    <div className="border-t-2 border-white w-20 mb-2"></div>
                    <h1 className="font-semibold text-white text-3xl md:text-4xl">
                        Tech Stack
                    </h1>
                    <p className="text-white/60 mt-2 max-w-xl">
                        Technologies and tools I use to design, build, and deploy scalable
                                                      software solutions.
                    </p>
                </section>

                <section>
                    <h1 className="font-semibold text-white text-xl mt-4">
                        Mostly Currently Working With
                    </h1>
                    <ul className='text-white flex gap-2 flex-col mt-4'>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Dart</li>
                    </ul>
                </section>

                <section>

                    <h1 className="font-semibold text-white text-xl mt-4">
                        Currently Working On
                    </h1>
                    <p className="text-white/60 mt-2 max-w-xl">
                        I&apos;m currently working on building a comprehensive portfolio website that showcases my skills and projects.
                    </p>
                </section>
            </div>


            {/* Grid */}
            <div className="flex flex-1 flex-row flex-wrap gap-8">

                {/* Card 1: Programming Languages */}
                <TechCard title="Programming Languages"
                    items={
                        [
                            {
                                name: "Java",
                                icon: "devicon-java-plain colored",
                                color: "text-orange-500"
                            }, {
                                name: "JavaScript",
                                icon: "devicon-javascript-plain colored",
                                color: "text-yellow-400"
                            }, {
                                name: "TypeScript",
                                icon: "devicon-typescript-plain colored",
                                color: "text-blue-500"
                            }, {
                                name: "Dart",
                                icon: "devicon-dart-plain colored",
                                color: "text-blue-400"
                            }
                        ]
                    }/> {/* Card 2: Frontend Development */}
                <TechCard title="Frontend Development"
                    items={
                        [
                            {
                                name: "HTML",
                                icon: "devicon-html5-plain colored",
                                color: "text-orange-600"
                            },
                            {
                                name: "CSS",
                                icon: "devicon-css3-plain colored",
                                color: "text-blue-600"
                            },
                            {
                                name: "React",
                                icon: "devicon-react-original colored",
                                color: "text-cyan-400"
                            },
                            {
                                name: "Redux",
                                icon: "devicon-redux-original colored",
                                color: "text-purple-500"
                            }, {
                                name: "Electron",
                                icon: "devicon-electron-original colored",
                                color: "text-blue-300"
                            }, {
                                name: "Flutter",
                                icon: "devicon-flutter-plain colored",
                                color: "text-blue-400"
                            }
                        ]
                    }/> {/* Card 3: Backend Development */}
                <TechCard title="Backend Development"
                    items={
                        [
                            {
                                name: "Spring Boot",
                                icon: "devicon-spring-plain colored",
                                color: "text-green-500"
                            }, {
                                name: "Node.js",
                                icon: "devicon-nodejs-plain colored",
                                color: "text-green-600"
                            }, {
                                name: "Express.js",
                                icon: "devicon-express-original colored",
                                color: "text-gray-300"
                            }
                        ]
                    }/> {/* Card 4: Databases & Caching */}
                <TechCard title="Databases & Caching"
                    items={
                        [
                            {
                                name: "MySQL",
                                icon: "devicon-mysql-plain colored",
                                color: "text-blue-700"
                            }, {
                                name: "PostgreSQL",
                                icon: "devicon-postgresql-plain colored",
                                color: "text-blue-400"
                            }, {
                                name: "MongoDB",
                                icon: "devicon-mongodb-plain colored",
                                color: "text-green-600"
                            }, {
                                name: "Redis",
                                icon: "devicon-redis-plain colored",
                                color: "text-red-600"
                            }
                        ]
                    }/> {/* Card 5: DevOps & Cloud */}
                <TechCard title="DevOps & Cloud"
                    items={
                        [
                            {
                                name: "Docker",
                                icon: "devicon-docker-plain colored",
                                color: "text-blue-500"
                            }, {
                                name: "Kubernetes",
                                icon: "devicon-kubernetes-plain colored",
                                color: "text-blue-600"
                            }, {
                                name: "AWS",
                                icon: "devicon-amazonwebservices-plain colored",
                                color: "text-orange-500"
                            }
                        ]
                    }/> {/* Card 6: Architecture & Concepts */}
                <TechCard title="Architecture & Concepts"
                    items={
                        [
                            {
                                name: "Modular Architecture",
                                icon: "fas fa-cubes",
                                color: "text-purple-500"
                            }, {
                                name: "MVC / Layered",
                                icon: "fas fa-layer-group",
                                color: "text-green-500"
                            }, {
                                name: "System Decoupling",
                                icon: "fas fa-unlink",
                                color: "text-blue-500"
                            }
                        ]
                    }/>

            </div>
        </section>
    );
};

/* Updated Card Component with Icons */
const TechCard = ({title, items} : {
    title: string;
    items: {
        name: string;
        icon: string;
        color: string
    }[];
}) => {
    return (
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-2xl p-6
                                                    hover:scale-[1.02] transition-all duration-300
                                                    border border-gray-800 hover:border-gray-700
                                                    hover:shadow-2xl hover:shadow-blue-500/20 group w-[300px]">

            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg md:text-xl">
                    {title} </h3>
            </div>

            {/* Items List with Icons */}
            <ul className="space-y-4">
                {
                items.map((item) => (
                    <li key={
                            item.name
                        }
                        className="flex items-center gap-4 rounded-xl
                                                                               transition-all duration-200 group/item">
                        {/* Icon Container with Animation */}
                        <div className={
                            `w-10 h-10 rounded-lg flex items-center justify-center 
                            ${
                                item.color.replace('text-', 'bg-')
                            }/20 
                            group-hover/item:scale-110 transition-transform duration-200`
                        }>
                            <i className={
                                `${
                                    item.icon
                                } text-xl`
                            }></i>
                        </div>

                        {/* Technology Name */}
                        <div className="flex-1">
                            <span className="text-white font-medium">
                                {
                                item.name
                            }</span>
                        </div>
                    </li>
                ))
            } </ul>

            {/* Footer Stats */}
            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <i className="fas fa-bolt text-yellow-500"></i>
                    <span>Expert Level</span>
                </div>
                <div className="text-xs text-gray-500">
                    {
                    items.length
                }
                    technologies
                </div>
            </div>
        </div>
    );
};

export default TechStack;
