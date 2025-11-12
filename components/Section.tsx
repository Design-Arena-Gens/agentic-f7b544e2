type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section>
      <div className="mb-5 sm:mb-7 flex items-end justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h3>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}
