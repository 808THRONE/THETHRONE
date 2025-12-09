import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ManifestoView = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const titleRef = useRef(null);
    const postsRef = useRef(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/blog`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch blog posts", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!loading && posts.length > 0) {
            const ctx = gsap.context(() => {
                // Animate title
                gsap.from(titleRef.current.children, {
                    opacity: 0,
                    y: -30,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                });

                // Animate posts
                gsap.from(postsRef.current.children, {
                    opacity: 0,
                    x: -50,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: postsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });

            return () => ctx.revert();
        }
    }, [loading, posts]);

    const handlePostClick = (postId) => {
        const newSelected = selectedPost === postId ? null : postId;
        setSelectedPost(newSelected);
    };

    return (
        <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto pb-12">
            <div ref={titleRef}>
                <h2 className="text-5xl font-glitch text-zinc-200 mb-2">MANIFESTO</h2>
                <p className="text-green-600 font-mono mb-12 text-sm">/// ACCESSING ENCRYPTED LOGS...</p>
            </div>

            {loading ? (
                <div className="text-center text-green-600 font-mono animate-pulse">DECRYPTING...</div>
            ) : (
                <div ref={postsRef} className="space-y-2">
                    {posts.map(post => (
                        <div
                            key={post.id}
                            onClick={() => handlePostClick(post.id)}
                            className={`border border-zinc-800 bg-black/80 p-4 cursor-pointer transition-all hover:border-green-600 hover:shadow-lg hover:shadow-green-600/10 ${selectedPost === post.id ? 'border-green-600 bg-green-950/10' : ''}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <h3 className="text-2xl font-mono text-white uppercase tracking-wider">
                                    <span className="text-green-600 mr-2">{selectedPost === post.id ? '[-]' : '[+]'}</span>
                                    {post.title}
                                </h3>
                                <span className="font-mono text-xs text-zinc-400 border border-zinc-800 px-2 py-1">{post.date}</span>
                            </div>

                            {selectedPost === post.id && (
                                <div className="mt-6 text-lg text-zinc-300 font-mono leading-relaxed border-t border-green-900/30 pt-4 animate-in fade-in slide-in-from-top-2">
                                    {post.content}
                                    <div className="mt-4 text-green-500 text-xs font-mono">END_OF_FILE</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-12 p-4 border border-dashed border-zinc-800 text-center text-zinc-600 font-mono text-xs">
                ADMIN ACCESS REQUIRED TO WRITE NEW LOGS.
            </div>
        </div>
    );
};

export default ManifestoView;
