'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {

    return (

        <section className="relative overflow-hidden bg-black" id="contact">

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black" />
                <div className=" absolute inset-0 bg-gradient-to-r from-black via-transparent to-black " />
                <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 " />
            </div>

            <div className=" relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] flex-col items-center justify-between md:px-6 py-20 lg:flex-row lg:px-0  " >

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className=" relative flex w-full justify-start lg:w-[52%]"
                >

                    <div className=" absolute left-[-250px] top-[-120px] h-[850px] w-[850px] rounded-full bg-white/[0.05] blur-[240px] " />

                    {/*
                      The image itself gets a CSS mask so every edge fades to
                      transparent (revealing the black section background
                      behind it) instead of ending in a hard rectangle.
                      This is a property of the image, so it behaves the
                      same on mobile and desktop.
                    */}
                    <Image
                        src="/blackfrontcar.png"
                        alt="Black Car"
                        width={900}
                        height={700}
                        priority
                        className=" relative z-10 h-auto w-full max-w-[760px] object-cover select-none"
                        style={{
                            maskImage:
                                "radial-gradient(ellipse 75% 70% at 50% 50%, black 45%, transparent 85%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 75% 70% at 50% 50%, black 45%, transparent 85%)",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                        }}
                    />

                    {/* soft directional fades layered on top, now blending into a masked image instead of a hard-edged one */}
                    <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black z-30 pointer-events-none" />
                    <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-30 pointer-events-none" />
                    <div className=" absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-30 pointer-events-none lg:hidden" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className=" mt-16 w-full max-w-[600px] lg:mt-0 lg:w-[50%] lg:pr-20 px-6 md:px-0">
                    <div>

                        <h2 className=" font-ptsans text-center text-[34px] leading-[1.3] text-white lg:text-left lg:text-[40px]">
                            A better ride is just a
                        </h2>

                        <h3 className="  mt-1  font-orbitron  text-center  text-[36px]  uppercase  leading-none  tracking-wide  text-brand-600  lg:text-left  lg:text-[40px]">
                            call away!
                        </h3>

                    </div>

                    <form className="mt-12">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <input
                                type="text"
                                placeholder="Name"
                                className=" h-[58px] border border-[#2f2f2f] bg-transparent px-5 font-ptsans text-[18px] text-white outline-none transition-all duration-300 placeholder:text-[#8d8d8d] focus:border-brand-600" />

                            <input
                                type="email"
                                placeholder="Email"
                                className=" h-[58px] border border-[#2f2f2f] bg-transparent px-5 font-ptsans text-[18px] text-white outline-none transition-all duration-300 placeholder:text-[#8d8d8d] focus:border-brand-600"
                            />

                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

                            <input
                                type="text"
                                placeholder="Number"
                                className=" h-[58px] border border-[#2f2f2f] bg-transparent px-5 font-ptsans text-[18px] text-white outline-none transition-all duration-300 placeholder:text-[#8d8d8d] focus:border-brand-600"
                            />

                            <select
                                className=" h-[58px] border border-[#2f2f2f] bg-black px-5 font-ptsans text-[18px] text-[#8d8d8d] outline-none transition-all duration-300 focus:border-brand-600">
                                <option>Requirements</option>
                                <option>Interior Accessories</option>
                                <option>Exterior Styling</option>
                                <option>Electronics & Gadgets</option>
                                <option>Performance Parts</option>
                            </select>

                        </div>

                        <textarea
                            rows={4}
                            placeholder="Message"
                            className=" mt-5 w-full resize-none border border-[#2f2f2f] bg-transparent px-5 py-4 font-ptsans text-[18px] text-white outline-none transition-all duration-300 placeholder:text-[#8d8d8d] focus:border-brand-600"
                        />

                        <button type="submit" className=" mt-8 inline-flex h-[58px] items-center justify-center bg-[#6d6d6d] px-10 font-ptsans text-[18px] text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-[0_0_25px_rgba(255,0,0,.35)]">
                            Get a Consultation
                        </button>

                    </form>

                </motion.div>

            </div>

            {/* Mobile */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-52 z-30 pointer-events-none bg-gradient-to-r from-black via-black/40 lg:via-black/70 to-transparent" />

            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 lg:w-52 z-30 pointer-events-none bg-gradient-to-l from-black via-black/40 lg:via-black/70 to-transparent" />
            <div className=" absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-non" />

        </section>

    );

}