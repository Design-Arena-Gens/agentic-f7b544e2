import Image from 'next/image';
import Section from '../components/Section';
import PostCard from '../components/PostCard';
import AdBanner from '../components/AdBanner';
import { getFeaturedPost, getMostViewed, getRecommendations, getLatest } from '../lib/data';

export default function HomePage() {
  const featured = getFeaturedPost();
  const mostViewed = getMostViewed(6);
  const recommendations = getRecommendations(8);
  const latest = getLatest(6);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Featured */}
      <Section title="Featured" subtitle="Editor?s pick">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-soft">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-8 text-white">
              <div className="mb-3 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/85 prose-clamp">
                {featured.excerpt}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {latest.slice(0, 2).map((post) => (
              <PostCard key={post.id} post={post} orientation="horizontal" />)
            )}
          </div>
        </div>
      </Section>

      {/* Ad */}
      <AdBanner />

      {/* Recommendations */}
      <Section title="Recommended for you" subtitle="Based on what?s trending">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* Most viewed */}
      <Section title="Most viewed" subtitle="Readers can?t get enough of these">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mostViewed.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* Another Ad */}
      <AdBanner variant="wide" />

      {/* Latest */}
      <Section title="Latest" subtitle="Fresh stories for today">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
}
