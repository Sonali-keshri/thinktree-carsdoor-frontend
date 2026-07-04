import clsx from 'clsx';

const colors = {
  green: 'bg-emerald-500/20 text-emerald-400 ring-emerald-600/40',
  amber: 'bg-amber-500/20 text-amber-400 ring-amber-600/40',
  red: 'bg-red-500/20 text-red-400 ring-red-600/40',
  blue: 'bg-blue-500/20 text-blue-400 ring-blue-600/40',
  gray: 'bg-surface-700 text-gray-300 ring-surface-600/40',
  brand: 'bg-brand-600/20 text-brand-400 ring-brand-600/40',
};

export default function Badge({ children, color = 'gray', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
