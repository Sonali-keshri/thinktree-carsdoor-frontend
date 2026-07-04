'use client';

import Image from 'next/image';

const brands = [
  { name: 'Tata', logo: '/tata.png', width: 120 },
  { name: 'Honda', logo: '/honda.png', width: 135 },
  { name: 'Kia', logo: '/kn.png', width: 95 },
  { name: 'Hyundai', logo: '/hyundai.png', width: 145 },
  { name: 'BMW', logo: '/bmw.png', width: 120 }, 
  { name: 'Renault', logo: '/renault.png', width: 125 },
];

export default function BrandSection() {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="w-full overflow-hidden border-y border-[#2c2c2c] bg-[#202020] ">
   
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-[1500px] px-4 py-6">
        
        <div className="relative flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 pr-12">
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={40}
                  priority
                  className="h-auto max-h-[34px] w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}