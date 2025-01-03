import { NewsWidget } from '@/components/widgets/news';

export default function NewsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">News Feed</h1>
      <NewsWidget />
    </div>
  );
}