"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CreatePostFormProps {
  onAddPost: (content: string) => void;
}

export function CreatePostForm({ onAddPost }: CreatePostFormProps) {
  const [content, setContent] = useState('');
  const currentUserAvatar = PlaceHolderImages.find(img => img.id === 'user-current')?.imageUrl ?? '';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddPost(content);
      setContent('');
    }
  };
  
  return (
    <Card className="shadow-lg">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src={currentUserAvatar} data-ai-hint="person portrait" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="flex-1 resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none bg-transparent"
              rows={3}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={!content.trim()} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
