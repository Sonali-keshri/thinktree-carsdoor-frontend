'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * StackSection
 * Genuinely PINS this section in place while the next StackSection
 * scrolls up and covers it — real GSAP pinning, not CSS sticky,
 * so it won't silently break due to parent overflow/transform styles.
 *
 * IMPORTANT: give each StackSection an increasing `zIndex` prop
 * (0, 1, 2, 3...) so later sections stack visually ON TOP of
 * earlier ones as they cover them.
 *
 * Usage:
 * <StackSection zIndex={0}><HeroSection /></StackSection>
 * <StackSection zIndex={1}><AboutSection /></StackSection>
 * <StackSection zIndex={2}><ServicesSection /></StackSection>
 * <StackSection zIndex={3} isLast><WhyChooseUs /></StackSection>
 */
export default function StackSection({ children, zIndex = 0, isLast = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isLast) {
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top top',
          end: '+=150%',     
          pin: true,
          pinSpacing: false,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [isLast]);

  return (
    <div
      ref={ref}
      className="relative  w-full overflow-hidden"
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
