import React, { useEffect, useRef } from 'react';
import { Activity, Cpu, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const HomeView = () => {
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const badgeRef = useRef(null);
    const subtitlesRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate badge
            gsap.from(badgeRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: 'power2.out'
            });

            // Animate title with glitch effect
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            });

            // Glitch effect on title
            gsap.to(titleRef.current, {
                textShadow: '2px 0 #00ff41, -2px 0 #ff0000',
                duration: 0.1,
                delay: 0.5,
                yoyo: true,
                repeat: 3
            });

            // Animate subtitles
            gsap.from(subtitlesRef.current.children, {
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.8,
                ease: 'power2.out'
            });

            // Animate buttons
            gsap.from(buttonsRef.current.children, {
                opacity: 0,
                y: 30,
                scale: 0.8,
                duration: 0.6,
                stagger: 0.15,
                delay: 1.4,
                ease: 'back.out(1.7)'
            });
        });

        return () => ctx.revert();
    }, []);

    // Magnetic button effect for desktop
    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(e.currentTarget, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 pt-16">
            <div className="w-full max-w-4xl text-center space-y-8">
                <div
                    ref={badgeRef}
                    className="inline-flex items-center gap-2 text-green-500 border border-green-900/50 px-4 py-1 font-mono text-xs mb-4 pulse-glow"
                >
                    <Activity size={12} /> SYSTEM CRITICAL
                </div>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-8xl font-glitch text-white leading-[0.9] glitch-hover cursor-default select-none"
                >
                    CYBERSEC <span className="text-green-600">ENGINEER</span>
                </h1>

                <div
                    ref={subtitlesRef}
                    className="flex flex-col md:flex-row justify-center items-center gap-4 font-mono text-lg md:text-xl text-zinc-500 mt-8"
                >
                    <span>[ LINUX KERNEL ]</span>
                    <span className="hidden md:inline text-green-900">//</span>
                    <span>[ FIRMWARE ]</span>
                    <span className="hidden md:inline text-green-900">//</span>
                    <span>[ LOW-LEVEL ]</span>
                </div>

                <div
                    ref={buttonsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-lg mx-auto w-full"
                >
                    <button
                        onClick={() => navigate('/projects')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-black py-4 font-bold tracking-widest transition-all font-mono text-xl uppercase flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-green-600/50"
                    >
                        <Cpu size={20} /> Init_Projects.exe
                    </button>
                    <button
                        onClick={() => navigate('/manifesto')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="border border-zinc-700 text-zinc-500 hover:border-white hover:text-white py-4 font-bold tracking-widest transition-all font-mono text-xl uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/30"
                    >
                        <BookOpen size={20} /> Read_Logs.txt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
