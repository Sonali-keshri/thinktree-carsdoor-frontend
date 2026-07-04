import clsx from 'clsx';

export default function Input({ label, error, className, labelClassName, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className={clsx('mb-1.5 block text-sm font-medium', labelClassName || 'text-black')}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 transition-colors focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20',
          error && 'border-red-400 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Textarea({ label, error, className, labelClassName, rows = 4, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className={clsx('mb-1.5 block text-sm font-medium', labelClassName || 'text-black')}>
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={clsx(
          'w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-400 transition-colors focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20',
          error && 'border-red-400 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Select({ label, error, children, className, labelClassName, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className={clsx('mb-1.5 block text-sm font-medium', labelClassName || 'text-black')}>
          {label}
        </label>
      )}
      <select
        className={clsx(
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-black transition-colors focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20',
          error && 'border-red-400 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
