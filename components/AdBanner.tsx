type Props = { variant?: 'standard' | 'wide' };

export default function AdBanner({ variant = 'standard' }: Props) {
  const sizes = variant === 'wide' ? 'h-40' : 'h-28';
  return (
    <div className={`w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 ${sizes} grid place-items-center`}
      role="complementary" aria-label="Advertisement">
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Advertisement</div>
        <div className="mt-1 text-slate-500">Your ad could be here</div>
      </div>
    </div>
  );
}
