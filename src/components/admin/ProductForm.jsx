'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';
import Input, { Textarea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { CATEGORIES } from '@/lib/utils';

const defaultValues = {
  name: '',
  description: '',
  category: 'Exterior Accessories',
  price: '',
  stock: '',
  imageUrl: '',
};

export default function ProductForm({ initialData, onSubmit, loading, submitLabel = 'Save Product' }) {
  const [form, setForm] = useState({
    ...defaultValues,
    ...initialData,
    price: initialData?.price?.toString() || '',
    stock: initialData?.stock?.toString() || '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(initialData?.imageUrl || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setPreview('');
    setForm((prev) => ({ ...prev, imageUrl: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    if (imageFile) {
      formData.append('image', imageFile);
    } else if (form.imageUrl) {
      formData.append('imageUrl', form.imageUrl);
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          <Input
            label="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
          <Textarea
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the product..."
            required
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
            <Input
              label="Price ($)"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={form.price}
              onChange={handleChange}
              placeholder="0.00"
              required
            />
          </div>
          <Input
            label="Stock Quantity"
            name="stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={handleChange}
            placeholder="0"
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-black">
            Product Image
          </label>
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-4">
            {preview ? (
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={preview} alt="Preview" fill className="object-cover" unoptimized />
                </div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -right-2 -top-2 rounded-full bg-red-600 p-1 text-white shadow-lg hover:bg-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="flex cursor-pointer flex-col items-center gap-3 py-8">
                <div className="rounded-full bg-red-100 p-3">
                  <Upload className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-black">Upload image</p>
                  <p className="text-xs text-gray-600">PNG, JPG up to 5MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          {/* {!preview && (
            <div className="mt-3">
              <Input
                label="Or paste image URL"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
          )} */}
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
        <Button type="submit" loading={loading} size="lg">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
