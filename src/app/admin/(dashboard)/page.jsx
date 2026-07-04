'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';
import { productAPI } from '@/lib/api';
import { formatPrice } from '@/lib/utils';

function StatCard({ icon: Icon, label, value, color }) {
  const colors = {
    brand: 'bg-brand-50 text-brand-600',
    green: 'bg-emerald-50 text-emerald-600',
    amber: 'bg-amber-50 text-amber-600',
    blue: 'bg-blue-50 text-blue-600',
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="mt-2 text-2xl font-bold text-black">{value}</p>
        </div>
        <div className={`rounded-xl p-3 ${colors[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    lowStock: 0,
    outOfStock: 0,
    totalValue: 0,
  });
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await productAPI.getAll({ page: 1, limit: 50 });
        const products = data.data.products;
        const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 10).length;
        const outOfStock = products.filter((p) => p.stock === 0).length;
        const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

        setStats({
          total: data.data.pagination.total,
          lowStock,
          outOfStock,
          totalValue,
        });
        setRecentProducts(products.slice(0, 5));
      } catch {
        /* empty */
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="mt-1 text-gray-600">Overview of your product inventory</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Package} label="Total Products" value={loading ? '...' : stats.total} color="brand" />
        <StatCard icon={DollarSign} label="Inventory Value" value={loading ? '...' : formatPrice(stats.totalValue)} color="green" />
        <StatCard icon={AlertTriangle} label="Low Stock" value={loading ? '...' : stats.lowStock} color="amber" />
        <StatCard icon={TrendingUp} label="Out of Stock" value={loading ? '...' : stats.outOfStock} color="blue" />
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="font-semibold text-black">Recent Products</h2>
          <Link href="/admin/products" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                [...Array(3)].map((_, i) => (
                  <tr key={i}>
                    <td colSpan={4} className="px-6 py-4">
                      <div className="h-4 animate-pulse rounded bg-surface-200" />
                    </td>
                  </tr>
                ))
              ) : (
                recentProducts.map((product) => (
                  <tr key={product._id} className="hover:bg-surface-50">
                    <td className="px-6 py-4">
                      <Link href={`/admin/products/${product._id}`} className="font-medium text-surface-900 hover:text-brand-600">
                        {product.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-surface-500">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium">{formatPrice(product.price)}</td>
                    <td className="px-6 py-4 text-sm">{product.stock}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
