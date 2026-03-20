import React from 'react'
import { Mail, Linkedin, Github, Send, Link } from 'lucide-react';
import { SocialCard } from '../Components/SocialCard';
import { ContactForm } from '../Components/ContactForm';

export const Contact = ({ className, id }) => {
    return (
        <section id={id} className={className}>
        <section id="contact" className="text-white py-20 px-6 mt-32 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">Hablemos <span className="text-[#00ff88]">ahora</span></h2>
                    <p className="text-gray-400">Estoy disponible para nuevos proyectos y colaboraciones.</p>

                    <div className="space-y-4">
                        <SocialCard item={{link: "mailto:juanjosegomez182@gmail.com", icon: <Mail />, label: "Email", value: "juanjosegomez182@gmail.com" }} />
                        <SocialCard item={{link: "https://linkedin.com/in/juan-josé-gómez-escobar-611ab4285", icon: <Linkedin />, label: "LinkedIn", value: "Juan Jose Gomez Escobar" }} />
                        <SocialCard item={{link: "https://github.com/xGomezx", icon: <Github />, label: "GitHub", value: "xGomezx" }} />
                    </div>
                </div>

                <div >
                    <ContactForm />
                </div>

                
            </div>
        </section>
        </section>
    )
}
