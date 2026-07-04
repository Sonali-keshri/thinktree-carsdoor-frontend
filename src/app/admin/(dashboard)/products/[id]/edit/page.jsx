'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProductForm from '@/components/admin/ProductForm';
import { productAPI } from '@/lib/api';
import toast from 'react-hot-toast';

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await productAPI.getById(id);
        setProduct(data.data.product);
      } catch {
        toast.error('Product not found');
        router.push('/admin/products');
      } finally {
        setFetching(false);
      }
    };
    if (id) fetchProduct();
  }, [id, router]);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await productAPI.update(id, formData);
      toast.success('Product updated successfully');
      router.push(`/admin/products/${id}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-gray-200" />
        <div className="h-96 rounded-xl bg-gray-200" />
      </div>
    );
  }

  return (
    <div>
      <Link
        href={`/admin/products/${id}`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Product
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Edit Product</h1>
        <p className="mt-1 text-gray-600">Update product information</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-card lg:p-8">
        <ProductForm
          initialData={product}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel="Update Product"
        />
      </div>
    </div>
  );
}
