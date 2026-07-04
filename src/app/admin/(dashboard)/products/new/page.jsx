'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProductForm from '@/components/admin/ProductForm';
import { productAPI } from '@/lib/api';
import toast from 'react-hot-toast';

export default function NewProductPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await productAPI.create(formData);
      toast.success('Product created successfully');
      router.push('/admin/products');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link
        href="/admin/products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Add New Product</h1>
        <p className="mt-1 text-gray-600">Fill in the details to create a new product</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-card lg:p-8">
        <ProductForm onSubmit={handleSubmit} loading={loading} submitLabel="Create Product" />
      </div>
    </div>
  );
}
