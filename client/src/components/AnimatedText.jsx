import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({
    children,
    className = '',
    variant = 'fade', // 'fade', 'typing', 'glitch'
    delay = 0,
    stagger = 0.03
}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const element = textRef.current;

        if (variant === 'typing') {
            // Split text into characters
            const text = element.textContent;
            element.textContent = '';
            const chars = text.split('');

            chars.forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                element.appendChild(span);
            });

            gsap.to(element.children, {
                opacity: 1,
                duration: 0.05,
                stagger: stagger,
                delay: delay,
                ease: 'none'
            });
        } else if (variant === 'glitch') {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    x: -20,
                    textShadow: '2px 0 #00ff41, -2px 0 #ff0000'
                },
                {
                    opacity: 1,
                    x: 0,
                    textShadow: 'none',
                    duration: 0.5,
                    delay: delay,
                    ease: 'power2.out'
                }
            );
        } else {
            // Default fade variant
            gsap.fromTo(element,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: delay,
                    ease: 'power3.out'
                }
            );
        }
    }, [variant, delay, stagger]);

    return (
        <span ref={textRef} className={className}>
            {children}
        </span>
    );
};

export default AnimatedText;
