import React, { useState, useEffect, useRef } from 'react';
import { Shield, Server, Mail, Phone, MapPin, Linkedin, Github, FolderOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TerminalBlock from '../components/TerminalBlock';

gsap.registerPlugin(ScrollTrigger);

const TerminalView = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const titleRef = useRef(null);
    const bioRef = useRef(null);
    const certRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/profile')
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch profile", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!loading && profile) {
            const ctx = gsap.context(() => {
                gsap.from(titleRef.current, {
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                gsap.from(bioRef.current, {
                    opacity: 0,
                    x: -30,
                    duration: 0.8,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: bioRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });

                gsap.from(certRef.current, {
                    opacity: 0,
                    x: -30,
                    duration: 0.8,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: certRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });

                if (skillsRef.current) {
                    gsap.from(skillsRef.current.children, {
                        opacity: 0,
                        x: 30,
                        duration: 0.6,
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: skillsRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                }
            });

            return () => ctx.revert();
        }
    }, [loading, profile]);

    if (loading) return <div className="pt-24 text-center text-green-500 font-mono">LOADING SYSTEM SPECS...</div>;
    if (!profile) return <div className="pt-24 text-center text-green-500 font-mono">SYSTEM ERROR: PROFILE NOT FOUND</div>;

    return (
        <div className="min-h-screen pt-24 px-4 md:px-12 pb-12 max-w-6xl mx-auto">
            <h2
                ref={titleRef}
                className="text-5xl font-glitch text-green-800 mb-8 border-b border-green-900/30 pb-4"
            >
                SYSTEM_SPECS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Bio & Education */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Bio */}
                    <div ref={bioRef}>
                        <TerminalBlock title="USER_PROFILE.DAT">
                            <p className="text-green-500 mb-2">$ whoami</p>
                            <p className="mb-4 text-white text-xl leading-relaxed">
                                {profile.bio}
                            </p>
                            <p className="text-green-500 mb-2">$ uptime</p>
                            <p className="text-zinc-400">System online. Protocol 808 Active.</p>
                        </TerminalBlock>
                    </div>

                    {/* Contact Info */}
                    <div ref={contactRef}>
                        <TerminalBlock title="CONTACT_INFO">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300">
                                <div className="flex items-center gap-2">
                                    <Mail className="text-green-600" size={16} />
                                    <a href={`mailto:${profile.contact.email}`} className="hover:text-green-500 transition-colors">
                                        {profile.contact.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="text-green-600" size={16} />
                                    <span>{profile.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-green-600" size={16} />
                                    <span>{profile.contact.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Github className="text-green-600" size={16} />
                                    <a href={profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">
                                        GitHub
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="text-green-600" size={16} />
                                    <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">
                                        LinkedIn
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FolderOpen className="text-green-600" size={16} />
                                    <a href={profile.contact.portfolio} target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">
                                        Portfolio Drive
                                    </a>
                                </div>
                            </div>
                        </TerminalBlock>
                    </div>

                    {/* Education & Certifications */}
                    <div ref={certRef}>
                        <TerminalBlock title="EDUCATION_&_CERTIFICATIONS">
                            <div className="space-y-6">
                                {/* Education */}
                                <div>
                                    <p className="text-green-500 mb-3 text-sm">// EDUCATION</p>
                                    <ul className="space-y-4 text-zinc-300">
                                        {profile.education.map((edu, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Shield className="text-green-600 mt-1" size={16} />
                                                <div>
                                                    <strong className="text-white block text-xl">{edu.degree}</strong>
                                                    <span className="text-sm text-zinc-400">{edu.institution} // {edu.period}</span>
                                                    {edu.details && <p className="text-sm text-zinc-500 mt-1">{edu.details}</p>}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Certifications */}
                                <div>
                                    <p className="text-green-500 mb-3 text-sm">// CERTIFICATIONS</p>
                                    <ul className="space-y-3 text-zinc-300">
                                        {profile.certifications.map((cert, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Shield className="text-green-600 mt-1" size={16} />
                                                <div>
                                                    <strong className="text-white block text-lg">{cert.name}</strong>
                                                    <span className="text-sm text-zinc-400">{cert.issuer} // {cert.year}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </TerminalBlock>
                    </div>
                </div>

                {/* Right Column: Skills */}
                <div ref={skillsRef} className="space-y-6">
                    {profile.skills.map((group, idx) => (
                        <TerminalBlock key={idx} title={`MODULE_${group.category}`}>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, skillIdx) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 bg-green-900/20 border border-green-900/50 text-green-400 text-base hover:bg-green-600 hover:text-black cursor-default transition-all hover:scale-110"
                                        style={{
                                            animationDelay: `${skillIdx * 0.05}s`
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </TerminalBlock>
                    ))}

                    <div className="border border-zinc-800 p-4 bg-black/50 text-center">
                        <Server className="mx-auto text-zinc-600 mb-2" size={32} />
                        <div className="text-xs text-zinc-500">SERVER STATUS: STABLE</div>
                        <div className="text-xs text-green-900">PING: 4ms</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalView;
