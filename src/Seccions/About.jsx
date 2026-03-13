import React, { useState, useEffect } from 'react'
import Avatar from '../assets/Avatar-removebg-preview.png'

export default function About() {
    // Textos a escribir
    const titleBase = "HI, I'M ";
    const name = "JUANJO";
    const roleText = "Software Developer";

    // Estados para la animación de texto
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [displayedRole, setDisplayedRole] = useState("");
    const [index, setIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);

    // NUEVO ESTADO: Para controlar la animación del avatar
    const [avatarLoaded, setAvatarLoaded] = useState(false);

    // Efecto para el título principal
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

    // Efecto para el subtítulo (comienza cuando el título termina)
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
        <div className='h-screen w-screen flex justify-start items-center text-white p-10 overflow-hidden'>

            {/* Contenedor del Avatar con animación */}
            <div className={`transition-all duration-1000 ease-out 
                ${avatarLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <img 
                    src={Avatar} 
                    alt="Avatar" 
                    // Cuando la imagen carga, cambiamos el estado para activar la animación
                    onLoad={() => setAvatarLoaded(true)}
                    // Ajustamos el tamaño y sombra para que se vea mejor
                    className="max-w-[450px] drop-shadow-2xl" 
                />
            </div>

            {/* Contenedor de texto (tu código original) */}
            <div className='bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-3xl w-4/6 h-2/3 flex flex-col justify-center items-center ml-10'>
                
                {/* Título animado */}
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter text-center">
                    {displayedTitle.includes(name) ? (
                        <>HI, I'M <span className="text-emerald-500">{name}</span></>
                    ) : (
                        displayedTitle
                    )}
                    <span className="inline-block w-[3px] h-[1em] bg-emerald-500 ml-1 animate-pulse">|</span>
                </h1>

                {/* Subtítulo animado */}
                <p className="text-xl md:text-2xl font-light text-emerald-400/90 mb-6 uppercase tracking-widest min-h-[1.5em] text-center">
                    {displayedRole}
                </p>

                {/* Párrafo descriptivo */}
                <p className={`text-gray-300 text-lg leading-relaxed font-normal text-center transition-opacity duration-1000 ${roleIndex > 0 ? 'opacity-100' : 'opacity-0'}`}>
                    I’m a software developer with a passion for creating
                    <span className="text-white font-medium"> innovative solutions</span> and building
                    impactful projects. Specialized in <span className="text-white font-medium text-emerald-400">React</span> and
                    modern web technologies, I strive to deliver high-quality code and user-friendly applications.
                </p>
                
            </div>
        </div>
    )
}