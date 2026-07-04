'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  LogOut,
  Store,
  ChevronRight,
} from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/products/new', label: 'Add Product', icon: PlusCircle },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isActive = (href, exact) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-surface-950 text-white">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
        
        <div>
          <Image
            src="/logo.png"
            alt="Car Decor"
            width={170}
            height={60}
            priority
            className="object-contain"
          />
        
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ href, label, icon: Icon, exact }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
              isActive(href, exact)
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            )}
          >
            <Icon className="h-5 w-5" />
            {label}
            {isActive(href, exact) && (
              <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
            )}
          </Link>
        ))}

        <div className="my-4 border-t border-white/10" />

        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-all hover:bg-white/5 hover:text-white"
        >
          <Store className="h-5 w-5" />
          View Store
        </Link>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 rounded-lg bg-white/5 px-3 py-2">
          <p className="text-sm font-medium">{user?.name || 'Admin'}</p>
          <p className="truncate text-xs text-white/50">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500/10"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
