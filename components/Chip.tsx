type Props = { children: React.ReactNode };
export default function Chip({ children }: Props) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-wide text-slate-600">
      {children}
    </span>
  );
}
