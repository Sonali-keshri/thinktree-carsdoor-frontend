'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-32" id="about">

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-20">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20"
        >

          <h2 className="font-orbitron text-[34px] text-brand-600 lg:text-[48px]">
            Love your ride?
          </h2>

          <h3 className="mt-2 font-ptsans text-[28px] text-white lg:text-[40px]">
            You'll love us too.
          </h3>

          <p className="mt-10 max-w-[620px] font-ptsans text-[12px]  text-gray-300 lg:text-[16px]">
            Not sure where to start your car's upgrade journey? Spoiler:
            With us. Every time you upgrade your car with us, it's more
            than just finding the best car accessories; it's about
            creating a new look for your car. We work our magic to make
            sure we meet everything on your ride's wishlist, from
            exterior styling to interior car accessories. We're here to
            bridge the gap between customer aspirations and high-quality
            car accessories. Whether it's ambient lighting to set the
            mood or performance parts to boost your drive, we have it
            all.
          </p>

          <p className="mt-8 max-w-[620px] font-ptsans text-[12px]  text-gray-300 lg:text-[16px]">
            By bringing the finest brands just a drive away in Bangalore,
            our expert team ensures you customise your car exactly the
            way you envision it. Since our establishment in 1992, we have
            never wavered from the goal of making car customization, car
            upgrades, and car styling easier for you. We take your ride
            as seriously as you do! Join us and let's give it the
            transformation it's been waiting for.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-transparent" />

          <Image
            src="/bgstairing.png"
            alt="Car Interior"
            width={900}
            height={700}
            className="h-auto w-full max-w-[650px] object-contain"
          />

        </motion.div>

      </div>
    </section>
  );
}