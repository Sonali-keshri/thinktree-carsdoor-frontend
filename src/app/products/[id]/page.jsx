'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PublicHeader from '@/components/Navbar';
import ProductDetailView from '@/components/ProductDetailView';
import { productAPI } from '@/lib/api';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await productAPI.getById(id);
        setProduct(data.data.product);
      } catch {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  return (
    <div className="min-h-screen bg-surface-950">
      <PublicHeader />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {loading ? (
          <div className="animate-pulse rounded-2xl bg-surface-800 p-8 shadow-card">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-square rounded-xl bg-surface-700" />
              <div className="space-y-4">
                <div className="h-8 w-3/4 rounded bg-surface-700" />
                <div className="h-6 w-1/4 rounded bg-surface-700" />
                <div className="h-24 rounded bg-surface-700" />
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-600 bg-red-500/10 p-8 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <ProductDetailView product={product} />
        )}
      </main>
    </div>
  );
}
