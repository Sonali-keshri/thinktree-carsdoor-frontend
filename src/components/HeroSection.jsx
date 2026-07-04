
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (

    <section
      className="relative min-h-screen overflow-hidden bg-blacktext-white flex flex-col justify-between pt-32"
    >
      <div className="absolute top-0 left-0 right-0 h-[90%]  z-0">
        <Image
          src="/herobg.png"
          alt="Hero Background"
          priority
          height={600}
          width={1920}
          className="object-cover object-top opacity-60 h-[94%] w-[80%] mx-auto"
        />
      </div>

      <div className="relative z-20 mx-auto flex flex-1 flex-col items-center justify-center max-w-[1440px] px-4 text-center ">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 z-30"
        >
          <h1 className=" font-orbitron font-normal uppercase text-brand-600 leading-[150%] tracking-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            ATTENTION
          </h1>

          <h2 className="font-orbitron font-normal mt-2 text-[24px]  tracking-wide text-gray-200 sm:text-[32px] md:text-[26px]">
            Your car is due for a new look
          </h2>

          <p className="mx-auto mt-4 max-w-[500px] text-lg font-light leading-relaxed text-gray-400 sm:text-sm">
            We’ve been doing this for three decades,<br />
            let us upgrade your ride!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-full max-w-[960px] mt-2 z-20"
        >

          <div className="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/herocar.png"
              alt="Featured Car"
              width={680}
              height={500}
              priority
              className="h-auto w-full object-contain mx-auto"
            />
          </motion.div>
        </motion.div>

      </div>

      <div className=" absolute bottom-[72px] left-0 w-full h-28 z-30 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent  "/>
      <div className=" absolute top-0 right-0 w-[200px] h-full z-30 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent"/>

<div className=" absolute inset-y-0 left-0 w-52 z-30 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent" />
<div className=" absolute inset-y-0 right-0 w-52 z-30 pointer-events-none bg-gradient-to-l from-black via-black/70 to-transparent "/>
<div className=" absolute inset-y-0 left-0 w-52 z-30 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent "/>
<div className=" absolute inset-y-0 right-0 w-52 z-30 pointer-events-none bg-gradient-to-l from-black via-black/70 to-transparent " />
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-40 w-full border-t border-white/10 bg-[#1A1A1A] backdrop-blur-md"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm md:text-base lg:text-lg">
            <span className="font-sans font-medium italic tracking-wide text-white">
              High-quality Accessories
            </span>

            <span className="text-red-600 text-lg font-bold select-none hidden sm:inline">*</span>

            <span className="font-sans font-medium italic tracking-wide text-white">
              30 Years of Experience
            </span>

            <span className="text-red-600 text-lg font-bold select-none hidden sm:inline">*</span>

            <span className="font-sans font-medium italic tracking-wide text-white">
              Personalised Service
            </span>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
