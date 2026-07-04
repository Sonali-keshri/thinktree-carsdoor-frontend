
// 'use client';

// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import Image from "next/image";

// const testimonials = [
//     {
//         id: 1,
//         text: "Had a great experience getting my car's infotainment screen and reverse camera fixed. Clean, efficient work and everything runs perfectly now. Special thanks to Mr. Kiran for his clear communication throughout. Highly reliable service!",
//         author: "Karthik Sudarshan",
//     },
//     {
//         id: 2,
//         text: "Excellent service quality and premium accessories selection. The staff is highly knowledgeable and guided me perfectly on picking the right components for my upgrade. Timely delivery and highly precise execution.",
//         author: "Rahul Sharma",
//     },
//     {
//         id: 3,
//         text: "Amazing response and pristine detailing execution. The team handled my premium sedan with absolute care. The ambient lighting system integration feels factory-fitted. Definitely coming back!",
//         author: "Ananya Nair",
//     },
// ];

// export default function TestimonialSection() {
//     const sliderRef = useRef(null);

//     const settings = {
//         infinite: true,
//         centerMode: true,
//         centerPadding: "300px",
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false,
//         autoplay: true,
//         autoplaySpeed: 4500,
//         speed: 800,
//         cssEase: "ease",
//         responsive: [
//             {
//                 breakpoint: 1280,
//                 settings: {
//                     centerPadding: "180px",
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     centerPadding: "120px",
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     centerPadding: "40px",
//                 },
//             },
//             {
//                 // Phones — this is the breakpoint that was missing.
//                 // Without it, phones inherited the 40px from the 768 tier,
//                 // which is proportionally huge on a ~390px screen.
//                 breakpoint: 480,
//                 settings: {
//                     centerPadding: "12px",
//                 },
//             },
//         ],
//     };

//     return (
//         <section className="w-full bg-black py-16 text-white overflow-hidden">
//             <style jsx global>{`
//         .slick-slide { transition: all 0.5s ease; opacity: 0.2; filter: blur(4px); transform: scale(0.9); }
//         .slick-current { opacity: 1 !important; filter: blur(0px) !important; transform: scale(1) !important; }
//         .slick-list { overflow: visible !important; }
//       `}</style>

//             <div className="mx-auto max-w-[1400px] px-4">
//                 <div className="text-center mb-16 tracking-wide">
//                     <h2 className="font-ptsans text-3xl md:text-4xl font-light text-gray-200">Trust our customers,</h2>
//                     <div className="font-orbitron text-4xl md:text-4xl  text-[#ff0000] mt-2 font-medium uppercase tracking-wider">not just us</div>
//                 </div>

//                 <div className="relative mx-auto ">

//                     <div className="w-full block">
//                         <Slider ref={sliderRef} {...settings}>
//                             {testimonials.map((item) => (

//                                 <div key={item.id} className="px-1 sm:px-2 md:px-4 py-8 outline-none">
//                                     <div className="relative bg-[#161616] border border-[#262626] rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
//                                         <Image src="/quote.png" alt="Quote" width={80} height={80} className="absolute -top-8 left-0 w-14 h-14 md:w-20 md:h-20 select-none"
//                                         />
//                                         <p className=" font-ptsans text-gray-300 text-sm md:text-base font-light leading-relaxed text-left tracking-wide mt-2">{item.text}</p>
//                                         <div className="font-orbitron text-right mt-6 text-lg font-medium text-gray-100 tracking-wide">-{item.author}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>

//                     <div className="flex justify-center items-center gap-6 mt-4">
//                         <button onClick={() => sliderRef.current?.slickPrev()} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
//                             <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
//                         </button>
//                         <button onClick={() => sliderRef.current?.slickNext()} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
//                             <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client';

import React, { useRef, useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "Had a great experience getting my car's infotainment screen and reverse camera fixed. Clean, efficient work and everything runs perfectly now. Special thanks to Mr. Kiran for his clear communication throughout. Highly reliable service!",
        author: "Karthik Sudarshan",
    },
    {
        id: 2,
        text: "Excellent service quality and premium accessories selection. The staff is highly knowledgeable and guided me perfectly on picking the right components for my upgrade. Timely delivery and highly precise execution.",
        author: "Rahul Sharma",
    },
    {
        id: 3,
        text: "Amazing response and pristine detailing execution. The team handled my premium sedan with absolute care. The ambient lighting system integration feels factory-fitted. Definitely coming back!",
        author: "Ananya Nair",
    },
];

function TestimonialCard({ item }) {
    return (
        <div className="relative bg-[#161616] border border-[#262626] rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
            <Image
                src="/quote.png"
                alt="Quote"
                width={80}
                height={80}
                className="absolute -top-8 left-0 w-14 h-14 md:w-20 md:h-20 select-none"
            />
            <p className="font-ptsans text-gray-300 text-sm md:text-base font-light leading-relaxed text-left tracking-wide mt-2">
                {item.text}
            </p>
            <div className="font-orbitron text-right mt-6 text-lg font-medium text-gray-100 tracking-wide">
                -{item.author}
            </div>
        </div>
    );
}

/* ---------------- Desktop: unchanged react-slick, exactly as before ---------------- */
function DesktopSlider() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 800,
        cssEase: "ease",
        responsive: [
            { breakpoint: 1280, settings: { centerPadding: "180px" } },
            { breakpoint: 1024, settings: { centerPadding: "120px" } },
        ],
    };

    return (
        <div className="relative mx-auto">
            <style jsx global>{`
        .slick-slide { transition: all 0.5s ease; opacity: 0.2; filter: blur(4px); transform: scale(0.9); }
        .slick-current { opacity: 1 !important; filter: blur(0px) !important; transform: scale(1) !important; }
        .slick-list { overflow: visible !important; }
      `}</style>

            <div className="w-full block">
                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((item) => (
                        <div key={item.id} className="px-4 py-8 outline-none">
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex justify-center items-center gap-6 mt-4">
                <button onClick={() => sliderRef.current?.slickPrev()} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
                <button onClick={() => sliderRef.current?.slickNext()} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
            </div>
        </div>
    );
}

/* ---------------- Mobile: scroll-snap, one slide at a time, no width-measurement bugs ---------------- */
function MobileCarousel() {
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = useCallback((index) => {
        const track = trackRef.current;
        const card = cardRefs.current[index];
        if (!track || !card) return;
        track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }, []);

    const goPrev = () => scrollToIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    const goNext = useCallback(
        () => scrollToIndex((activeIndex + 1) % testimonials.length),
        [activeIndex, scrollToIndex]
    );

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let raf = null;
        const handleScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const center = track.scrollLeft + track.offsetWidth / 2;
                let closest = 0;
                let closestDist = Infinity;
                cardRefs.current.forEach((card, i) => {
                    if (!card) return;
                    const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
            });
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            track.removeEventListener('scroll', handleScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        let interval = setInterval(goNext, 4500);
        const track = trackRef.current;
        const pause = () => clearInterval(interval);
        const resume = () => {
            clearInterval(interval);
            interval = setInterval(goNext, 4500);
        };
        track?.addEventListener('pointerdown', pause);
        track?.addEventListener('pointerup', resume);
        return () => {
            clearInterval(interval);
            track?.removeEventListener('pointerdown', pause);
            track?.removeEventListener('pointerup', resume);
        };
    }, [goNext]);

    return (
        <div className="relative mx-auto">
            <div
                ref={trackRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {testimonials.map((item, i) => (
                    <div
                        key={item.id}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="snap-center shrink-0 w-full px-4 py-8"
                    >
                        <div
                            className={`transition-all duration-500 ${
                                activeIndex === i ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-[1px] scale-95'
                            }`}
                        >
                            <TestimonialCard item={item} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-4">
                <button onClick={goPrev} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
                <button onClick={goNext} className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#2d2d2d] flex items-center justify-center transition-all hover:bg-[#282828] group">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
            </div>
        </div>
    );
}

export default function TestimonialSection() {
    return (
        <section className="w-full bg-black py-16 text-white overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4">
                <div className="text-center mb-16 tracking-wide">
                    <h2 className="font-ptsans text-3xl md:text-4xl font-light text-gray-200">Trust our customers,</h2>
                    <div className="font-orbitron text-4xl md:text-4xl text-[#ff0000] mt-2 font-medium uppercase tracking-wider">not just us</div>
                </div>

                <div className="hidden md:block">
                    <DesktopSlider />
                </div>
                <div className="block md:hidden">
                    <MobileCarousel />
                </div>
            </div>
        </section>
    );
}