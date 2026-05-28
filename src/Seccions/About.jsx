import React, { useState, useEffect } from 'react'
import Avatar from '../assets/Avatar-removebg-preview.png'

export default function About({ className, id }) {
    const titleBase = "HI, I'M ";
    const name = "JUANJO";
    const roleText = "Software Developer";

    const [displayedTitle, setDisplayedTitle] = useState("");
    const [displayedRole, setDisplayedRole] = useState("");
    const [index, setIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);
    const [avatarLoaded, setAvatarLoaded] = useState(false);

    useEffect(() => {
        const fullTitle = titleBase + name;
        if (index < fullTitle.length) {
            const timer = setTimeout(() => {
                setDisplayedTitle((prev) => prev + fullTitle[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [index]);

    useEffect(() => {
        if (index >= (titleBase + name).length && roleIndex < roleText.length) {
            const timer = setTimeout(() => {
                setDisplayedRole((prev) => prev + roleText[roleIndex]);
                setRoleIndex((prev) => prev + 1);
            }, 70);
            return () => clearTimeout(timer);
        }
    }, [index, roleIndex]);

    return (
        <section id={id} className={className}>
            <div className='min-h-screen w-full flex flex-col md:flex-row justify-center items-center text-white px-4  gap-6 md:gap-0 overflow-hidden'>

                {/* Avatar — arriba en mobile, izquierda en desktop */}
                <div className={`transition-all duration-1000 ease-out shrink-0
                    ${avatarLoaded ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 -translate-y-6 md:-translate-x-10'}`}>
                    <img
                        src={Avatar}
                        alt="Avatar"
                        onLoad={() => setAvatarLoaded(true)}
                        className="w-48 sm:w-64 md:w-72 lg:w-[350px] drop-shadow-2xl mx-auto"
                    />
                </div>

                {/* Contenedor de texto */}
                <div className='bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 
                                w-full md:w-4/6 md:max-w-3xl md:h-2/3 
                                flex flex-col justify-center items-center md:ml-10'>

                    {/* Título animado */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter text-center">
                        {displayedTitle.includes(name) ? (
                            <>HI, I'M <span className="text-emerald-500">{name}</span></>
                        ) : (
                            displayedTitle
                        )}
                        <span className="inline-block w-[3px] h-[1em] bg-emerald-500 ml-1 animate-pulse">|</span>
                    </h1>

                    {/* Subtítulo animado */}
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-emerald-400/90 mb-6 uppercase tracking-widest min-h-[1.5em] text-center">
                        {displayedRole}
                    </p>

                    {/* Párrafo descriptivo */}
                    <p className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-center transition-opacity duration-1000 ${roleIndex > 0 ? 'opacity-100' : 'opacity-0'}`}>
                        I'm a software developer with a passion for creating
                        <span className="text-white font-medium"> innovative solutions</span> and building
                        impactful projects. Specialized in <span className="text-white font-medium text-emerald-400">React</span> and
                        modern web technologies, I strive to deliver high-quality code and user-friendly applications.
                    </p>

                </div>
            </div>
        </section>
    )
}