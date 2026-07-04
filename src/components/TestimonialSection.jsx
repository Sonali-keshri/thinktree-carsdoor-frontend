
// 'use client';

// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import Image from "next/image";

// const testimonials = [
//     {
//         id: 1,
//         text: "Had a great experience getting my car's infotainment screen and reverse camera fixed here. The team did a clean and efficient job everything is working perfectly now. Special thanks to Mr. Kiran for his clear and professional communication. He kept me informed at every step and made the whole process smooth and hassle-free. Great service and very reliable. Highly recommend this place for any car accessory work!",
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
                               
//                                 <div key={item.id} className="px-4 py-8 outline-none">
//                                     <div className="relative bg-[#161616] border border-[#262626] rounded-2xl p-8 md:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
//                                         <Image src="/quote.png" alt="Quote" width={80} height={80} className="absolute -top-8 left-0  select-none"
//                                         />
//                                         {/* <Quote strokeWidth={1.5} absoluteStrokeWidth className="absolute -top-10 left-6 rotate-180 text-white opacity-25  font-serif leading-none select-none h-20  w-20" /> */}
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

import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

export default function TestimonialSection() {
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
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: "180px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "120px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "40px",
                },
            },
            {
                // Phones — this is the breakpoint that was missing.
                // Without it, phones inherited the 40px from the 768 tier,
                // which is proportionally huge on a ~390px screen.
                breakpoint: 480,
                settings: {
                    centerPadding: "12px",
                },
            },
        ],
    };

    return (
        <section className="w-full bg-black py-16 text-white overflow-hidden">
            <style jsx global>{`
        .slick-slide { transition: all 0.5s ease; opacity: 0.2; filter: blur(4px); transform: scale(0.9); }
        .slick-current { opacity: 1 !important; filter: blur(0px) !important; transform: scale(1) !important; }
        .slick-list { overflow: visible !important; }
      `}</style>

            <div className="mx-auto max-w-[1400px] px-4">
                <div className="text-center mb-16 tracking-wide">
                    <h2 className="font-ptsans text-3xl md:text-4xl font-light text-gray-200">Trust our customers,</h2>
                    <div className="font-orbitron text-4xl md:text-4xl  text-[#ff0000] mt-2 font-medium uppercase tracking-wider">not just us</div>
                </div>

                <div className="relative mx-auto ">

                    <div className="w-full block">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((item) => (

                                <div key={item.id} className="px-1 sm:px-2 md:px-4 py-8 outline-none">
                                    <div className="relative bg-[#161616] border border-[#262626] rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl min-h-[280px] flex flex-col justify-between">
                                        <Image src="/quote.png" alt="Quote" width={80} height={80} className="absolute -top-8 left-0 w-14 h-14 md:w-20 md:h-20 select-none"
                                        />
                                        <p className=" font-ptsans text-gray-300 text-sm md:text-base font-light leading-relaxed text-left tracking-wide mt-2">{item.text}</p>
                                        <div className="font-orbitron text-right mt-6 text-lg font-medium text-gray-100 tracking-wide">-{item.author}</div>
                                    </div>
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
            </div>
        </section>
    );
}