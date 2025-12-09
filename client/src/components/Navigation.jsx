import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const logoRef = useRef(null);

    const links = [
        { path: '/', label: '/// ROOT' },
        { path: '/terminal', label: '/// SYS_SPECS' }, // About/Skills
        { path: '/projects', label: '/// EXECUTABLES' }, // Portfolio
        { path: '/manifesto', label: '/// MANIFESTO' }, // Blog
    ];

    const isActive = (path) => location.pathname === path;

    // Add subtle animation to logo
    useEffect(() => {
        if (logoRef.current) {
            gsap.to(logoRef.current, {
                textShadow: '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)',
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-green-900/30 bg-black/90 backdrop-blur text-green-600 h-16 flex items-center justify-between px-6">
            <Link
                ref={logoRef}
                to="/"
                className="text-2xl font-glitch tracking-widest cursor-pointer text-green-500 hover:text-green-400 transition-colors"
            >
                808THRONE
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex space-x-8">
                {links.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`font-mono text-lg uppercase tracking-widest hover:text-white hover:bg-green-900/50 px-3 py-1 transition-all border border-transparent hover:border-green-600/30 ${isActive(link.path) ? 'text-white bg-green-900/80 border-green-600' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-green-500 hover:text-white transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black border-b border-green-900 flex flex-col p-4 gap-4 md:hidden backdrop-blur-sm">
                    {links.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-left font-mono text-xl text-green-500 hover:text-white hover:pl-4 transition-all py-2 border-l-2 border-transparent hover:border-green-600 ${isActive(link.path) ? 'text-white border-green-600 pl-4' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
