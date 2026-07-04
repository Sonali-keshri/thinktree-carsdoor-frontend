'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


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
            scrub: 0.6, 
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