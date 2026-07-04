'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ParallaxImage
 * Makes a background/foreground image move SLOWER (or faster) than
 * the normal scroll speed, creating classic parallax depth.
 *
 * speed:
 *   0.2 - 0.4  => subtle, background feels "distant"
 *   0.5 - 0.7  => noticeable drift
 *   negative   => image moves opposite to scroll (foreground pop-out feel)
 *
 * Usage:
 * <div className="relative h-[500px] overflow-hidden">
 *   <ParallaxImage src="/bgstairing.png" alt="Car" speed={0.3} />
 * </div>
 */
export default function ParallaxImage({
  src,
  alt = '',
  speed = 0.3,
  className = '',
  priority = false,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // tracks section from entering to leaving viewport
  });

  // Moves the image vertically as the page scrolls past this section
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}
