import { Feed } from '@/components/feed';
import { Header } from '@/components/header';

export default function FeedPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto max-w-3xl px-4 py-8">
        <Feed />
      </main>
    </div>
  );
}
