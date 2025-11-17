import type { Post, User } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl ?? '';

const users: User[] = [
  { id: 'user-1', name: 'Alice', avatarUrl: findImage('user-alice') },
  { id: 'user-2', name: 'Bob', avatarUrl: findImage('user-bob') },
  { id: 'user-3', name: 'Charlie', avatarUrl: findImage('user-charlie') },
  { id: 'user-4', name: 'Diana', avatarUrl: findImage('user-diana') },
];

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    user: users[0],
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    content: "Just started using EchoSphere! It feels so clean and intuitive. Loving the minimalist design. #newbeginnings",
    likes: 12,
    comments: [
      {
        id: 'comment-1-1',
        user: users[1],
        timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
        text: "Welcome, Alice! Glad to have you here.",
      },
      {
        id: 'comment-1-2',
        user: users[2],
        timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
        text: "Totally agree, the UI is fantastic.",
      }
    ]
  },
  {
    id: 'post-3',
    user: users[2],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    content: "What's everyone's favorite feature so far? For me, it's the simplicity. No clutter, just conversations.",
    likes: 25,
    comments: []
  }
];
