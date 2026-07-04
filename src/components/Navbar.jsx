
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Store, Shield } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? 'bg-black/75 backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-6">

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Car Decor"
            width={170}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">

          <Link
            href="#about"
            className="text-[14px] font-light text-white transition hover:text-red-500"
          >
            About Us
          </Link>

          <Link
            href="#services"
            className="text-[14px] font-light text-white transition hover:text-red-500"
          >
            Services
          </Link>

          <Link
            href="#blog"
            className="text-[14px] font-light text-white transition hover:text-red-500"
          >
            Blogs
          </Link>

          <div className="flex items-center gap-4">


            <Link
              href="#contact"
              className="border border-white/20 bg-white/5 px-7 py-3 text-[14px] text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
            >
              Contact Us
            </Link>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </div>


        </nav>
      </div>
    </header>
  );
}