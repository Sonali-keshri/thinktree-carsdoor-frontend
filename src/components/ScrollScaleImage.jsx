'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollScaleImage
 * Image grows bigger as you scroll DOWN through its section,
 * and automatically shrinks back if you scroll UP.
 * This is "scrubbed" — the scale is directly tied to scroll
 * position, not a one-time trigger, so it's naturally reversible.
 *
 * Usage:
 * <ScrollScaleImage src="/herocar.png" alt="Car" from={1} to={1.4} />
 */
export default function ScrollScaleImage({
  src,
  alt = '',
  from = 1,
  to = 1.4,
  containerClassName = 'relative h-[70vh] w-full overflow-hidden',
  imgClassName = 'h-full w-full object-cover',
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: from },
        {
          scale: to,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',   // animation starts when section enters bottom of viewport
            end: 'bottom top',     // ends when section exits top of viewport
            scrub: true,           // ties progress directly to scroll position (reversible)
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount / hot reload
  }, [from, to]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <img ref={imgRef} src={src} alt={alt} className={imgClassName} />
    </div>
  );
}
