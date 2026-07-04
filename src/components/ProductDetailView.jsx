'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Trash2, ArrowLeft } from 'lucide-react';
import { formatPrice, getStockStatus, getProductImage } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProductDetailView({ product, admin = false, onDelete, deleting }) {
  const stock = getStockStatus(product.stock);

  return (
    <div>
      <Link
        href={admin ? '/admin/products' : '/'}
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {admin ? 'Products' : 'Store'}
      </Link>

      <div className="overflow-hidden rounded-2xl border border-surface-700 bg-surface-800 shadow-card">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square bg-surface-700 lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={getProductImage(product)}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col p-6 lg:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge color="brand">{product.category}</Badge>
              <Badge color={stock.color}>{stock.label}</Badge>
            </div>
            <h1 className="text-2xl font-bold text-white lg:text-3xl">{product.name}</h1>
            <p className="mt-4 text-3xl font-bold text-brand-600">{formatPrice(product.price)}</p>
            <p className="mt-6 flex-1 leading-relaxed text-gray-300">{product.description}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl bg-surface-700 p-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Stock
                </p>
                <p className="mt-1 text-lg font-semibold text-white">{product.stock} units</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Category
                </p>
                <p className="mt-1 text-lg font-semibold text-white">{product.category}</p>
              </div>
            </div>

            {admin && (
              <div className="mt-8 flex gap-3">
                <Link href={`/admin/products/${product._id}/edit`} className="flex-1">
                  <Button variant="primary" className="w-full">
                    <Edit className="h-4 w-4" />
                    Edit Product
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={onDelete}
                  loading={deleting}
                  className="flex-1"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
