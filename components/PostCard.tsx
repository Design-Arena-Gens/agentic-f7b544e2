import Image from 'next/image';
import type { Post } from '../lib/data';

type Props = {
  post: Post;
  orientation?: 'vertical' | 'horizontal';
};

export default function PostCard({ post, orientation = 'vertical' }: Props) {
  if (orientation === 'horizontal') {
    return (
      <article className="group grid grid-cols-[40%,1fr] sm:grid-cols-[35%,1fr] gap-4 overflow-hidden rounded-xl border border-slate-200/70 bg-white">
        <div className="relative h-36">
          <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-wide text-slate-600">
                {t}
              </span>
            ))}
          </div>
          <h4 className="text-base font-semibold leading-snug line-clamp-2">{post.title}</h4>
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
          <p className="mt-3 text-xs text-slate-500">{new Date(post.date).toLocaleDateString()} ? {Intl.NumberFormat().format(post.views)} views</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200/70 bg-white">
      <div className="relative h-48">
        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-wide text-slate-600">
              {t}
            </span>
          ))}
        </div>
        <h4 className="text-base font-semibold leading-snug line-clamp-2">{post.title}</h4>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
        <p className="mt-3 text-xs text-slate-500">{new Date(post.date).toLocaleDateString()} ? {Intl.NumberFormat().format(post.views)} views</p>
      </div>
    </article>
  );
}
