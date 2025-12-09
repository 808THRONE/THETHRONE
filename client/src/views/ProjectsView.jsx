import React, { useState, useEffect, useRef } from 'react';
import { Github, Skull } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsView = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setRepos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Github Fetch Error", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!loading && repos.length > 0) {
            const ctx = gsap.context(() => {
                // Animate title
                gsap.from(titleRef.current, {
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                // Animate project cards
                gsap.from(gridRef.current.children, {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });

            return () => ctx.revert();
        }
    }, [loading, repos]);

    // 3D Tilt effect on cards
    const handleCardMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleCardMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto pb-12">
            <div ref={titleRef} className="flex items-end justify-between mb-12 border-b border-green-900/30 pb-4">
                <h2 className="text-4xl md:text-6xl font-glitch text-green-700">EXECUTABLES</h2>
                <span className="font-mono text-green-600 hidden md:block">./fetching_data...</span>
            </div>

            {loading ? (
                <div className="text-center text-green-600 font-mono animate-pulse text-xl">LOADING REPOSITORIES...</div>
            ) : (
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.length > 0 ? repos.map(repo => (
                        <div
                            key={repo.id}
                            className="bg-black border border-zinc-800 p-6 hover:border-green-600 transition-all group relative overflow-hidden"
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={handleCardMouseLeave}
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className="absolute top-0 right-0 bg-zinc-900 text-xs px-2 py-1 font-mono text-zinc-500">{repo.language}</div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-green-500 uppercase truncate transition-colors">
                                {repo.name}
                            </h3>
                            <p className="text-zinc-400 text-lg font-mono leading-tight mb-6 h-12 overflow-hidden">
                                {repo.description || "No description available for this entity."}
                            </p>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-900">
                                <span className="text-xs text-zinc-600 font-mono flex items-center gap-1">
                                    <Skull size={12} /> {repo.stargazers_count}
                                </span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-green-600 hover:text-white font-bold text-sm uppercase flex items-center gap-2 transition-colors relative z-10"
                                >
                                    Source <Github size={14} />
                                </a>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full text-center text-zinc-500">NO REPOSITORIES FOUND OR API LIMITED.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectsView;
