'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Store, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      router.replace('/admin');
    }
  }, [authLoading, isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      // Use replace to clear the login page from history
      router.replace('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-400 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-brand-600 via-brand-700 to-surface-950 p-12 lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
            <Store className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">CarDecor</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Manage your car accessories with ease
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Full control over your inventory, pricing, and product catalog from one dashboard.
          </p>
        </div>
        <p className="text-sm text-brand-200">Secure admin access with JWT authentication</p>
      </div>

      <div className="flex w-full flex-col justify-center bg-surface-950 px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-2">
              <Store className="h-8 w-8 text-brand-600" />
              <span className="text-xl font-bold text-white">CarDecor</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white">Sign in to Admin</h1>
          <p className="mt-2 text-gray-400">Enter your credentials to access the dashboard</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-[38px] h-4 w-4 text-gray-500" />
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="pl-10"
                labelClassName="text-white"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-[38px] h-4 w-4 text-gray-500" />
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="pl-10 pr-10"
                labelClassName="text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <Button type="submit" loading={loading} className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-8 rounded-lg bg-surface-800 border border-surface-700 p-4 text-sm text-gray-300">
            <p className="font-medium">Demo Credentials:</p>
            <p className="mt-1">Email: rsonalikeshri@gmail.com  </p>
            <p>Password: 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
