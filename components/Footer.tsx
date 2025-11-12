export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
        <p className="text-slate-400">Made with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
