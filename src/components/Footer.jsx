'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto">
          <Image
            src="/logo.png"
            alt="Car Decor"
            width={170}
            height={60}
            priority
            className="mx-auto h-auto object-contain"
          />

          <p className="mt-4 text-gray-400">Copyright © 2025 Car Decor | All Rights Reserved</p>

        </div>
      </div>
    </footer>
  );
}
