'use client';

import { Search, Filter } from 'lucide-react';
import Input, { Select } from './ui/Input';
import { CATEGORIES, SORT_OPTIONS } from '@/lib/utils';

export default function SearchFilter({
  search,
  category,
  sort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-card"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products by name..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-black placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
          />
        </div>
        <Select
          label=""
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Select label="" value={sort} onChange={(e) => onSortChange(e.target.value)}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </div>
    </form>
  );
}

export function AdminSearchFilter(props) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-surface-600">
        <Filter className="h-4 w-4" />
        Search & Filter
      </div>
      <SearchFilter {...props} />
    </div>
  );
}
