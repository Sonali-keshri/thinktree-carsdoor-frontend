'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * `zIndex` should be set PER STACK GROUP, starting at 0 for the first panel
 * in that group — not globally incremented across the whole page. Each
 * stack group is independent; only sections meant to overlap each other
 * need to be in the same rising z-index sequence.
 *
 * `bgClassName` gives the wrapper a solid background so that when the inner
 * panel scales down, you see a clean shrinking card — not a transparent gap
 * that lets the panel underneath bleed through.
 */
export default function StackSection({
  children,
  zIndex = 0,
  isLast = false,
  bgClassName = 'bg-black',
}) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isLast) {
        gsap.to(innerRef.current, {
          scale: 0.92,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6, // slight lag behind scroll = feels smoother than 1:1 tracking
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isLast]);

  return (
    <div
      ref={sectionRef}
      className={`sticky top-0  w-full overflow-hidden ${bgClassName}`}
      style={{ zIndex }}
    >
      <div
        ref={innerRef}
        className={`h-full w-full origin-center will-change-transform ${bgClassName}`}
      >
        {children}
      </div>
    </div>
  );
}