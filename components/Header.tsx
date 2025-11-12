import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <span className="text-brand-600">Modern</span> Blog
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <Link href="#" className="hover:text-slate-900">Featured</Link>
          <Link href="#" className="hover:text-slate-900">Recommendations</Link>
          <Link href="#" className="hover:text-slate-900">Most viewed</Link>
          <Link href="#" className="hover:text-slate-900">Latest</Link>
        </nav>
      </div>
    </header>
  );
}
