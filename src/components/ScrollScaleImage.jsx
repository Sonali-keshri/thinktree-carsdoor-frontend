'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
            start: 'top bottom',    
            end: 'bottom top',     
            scrub: true,           
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); 
  }, [from, to]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <img ref={imgRef} src={src} alt={alt} className={imgClassName} />
    </div>
  );
}
