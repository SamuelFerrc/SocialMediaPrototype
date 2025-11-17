"use client";

import { useState } from 'react';
import { initialPosts } from '@/lib/data';
import type { Post } from '@/lib/types';
import { CreatePostForm } from './create-post-form';
import { PostCard } from './post-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Feed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const currentUserAvatar = PlaceHolderImages.find(img => img.id === 'user-current')?.imageUrl ?? '';
  
  const handleAddPost = (content: string) => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      content,
      user: { // Hardcoded current user
        id: 'user-0',
        name: 'Current User',
        avatarUrl: currentUserAvatar,
      },
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };
  
  return (
    <div className="space-y-6">
      <CreatePostForm onAddPost={handleAddPost} />
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
