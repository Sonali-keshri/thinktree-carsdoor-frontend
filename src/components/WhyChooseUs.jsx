'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BrandShowcase from './BrandShowcase';

export default function WhyChooseUs({ zIndex = 3}) {
  return (
    <section className="relative overflow-hidden bg-black pt-24 "  style={{ zIndex }}>

      <div className="mx-auto max-w-[1200px] px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <h2 className="font-orbitron text-[28px] text-white md:text-[42px]">
            Why Your Ride Deserves a
          </h2>

          <h3 className="mt-2 font-orbitron text-[34px] text-brand-600 md:text-[60px]">
            Stop Here
          </h3>

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className=" mx-auto mt-10 max-w-[760px] text-center font-ptsans text-[14px] leading-7 text-gray-300 md:text-[18px "
        >
          At Car Decor, we believe your car deserves more than just accessories—
          it deserves a personality. Our services are designed to transform every
          journey into an experience, blending style, safety, and comfort
          seamlessly. With fast and secure shipping, getting your upgrades has
          never been easier. From cutting-edge upgrades to timeless enhancements,
          we handpick and install only the best, ensuring your ride feels as good
          as it looks. With a modern showroom that lets you imagine the
          possibilities and a team ready to guide you at every step, we make the
          process of upgrading your car simple, exciting, and truly your own.
        </motion.p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mt-14"
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-transparent" />

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateZ: [-1, 1, -1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/wheels.png"
            alt="Wheels"
            width={1600}
            height={400}
            className="mx-auto w-full max-w-[1100px] object-contain"
          />
        </motion.div>
      </motion.div>

  
      <BrandShowcase zIndex={3} />
    </section>
  );
}