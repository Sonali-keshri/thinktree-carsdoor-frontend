'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProductDetailView from '@/components/ProductDetailView';
import { productAPI } from '@/lib/api';
import toast from 'react-hot-toast';

export default function AdminProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await productAPI.getById(id);
        setProduct(data.data.product);
      } catch {
        toast.error('Product not found');
        router.push('/admin/products');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id, router]);

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      await productAPI.delete(id);
      toast.success('Product deleted');
      router.push('/admin/products');
    } catch {
      toast.error('Failed to delete product');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl bg-white p-8 shadow-card">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="aspect-square rounded-xl bg-gray-200" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-gray-200" />
            <div className="h-6 w-1/4 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProductDetailView
      product={product}
      admin
      onDelete={handleDelete}
      deleting={deleting}
    />
  );
}
