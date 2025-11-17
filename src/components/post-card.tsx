"use client";

import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { Post as PostType, Comment as CommentType } from '@/lib/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

import { CommentList } from './comment-list';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PostCardProps {
  post: PostType;
}

export function PostCard({ post }: PostCardProps) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<CommentType[]>(post.comments);
  const [showComments, setShowComments] = useState(false);

  const currentUserAvatar = PlaceHolderImages.find(img => img.id === 'user-current')?.imageUrl ?? '';

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleAddComment = async (commentText: string) => {
    const newComment: CommentType = {
        id: `comment-${Date.now()}`,
        text: commentText,
        user: { // Hardcoded current user
            id: 'user-0',
            name: 'Current User',
            avatarUrl: currentUserAvatar,
        },
        timestamp: new Date().toISOString(),
    };

    setComments(prev => [...prev, newComment]);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{post.user.name}</span>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-foreground/90">{post.content}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 border-t pt-4">
        <div className="flex gap-4">
            <Button variant="ghost" size="sm" onClick={handleLike} className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors duration-300">
                <Heart className={cn("h-5 w-5", isLiked ? "fill-destructive text-destructive" : "")} />
                <span>{likes} Likes</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
                <span>{comments.length} Comments</span>
            </Button>
        </div>
        {showComments && (
            <CommentList comments={comments} onAddComment={handleAddComment} />
        )}
      </CardFooter>
    </Card>
  );
}
