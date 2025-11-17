"use client";

import { useState } from 'react';
import type { Comment as CommentType } from '@/lib/types';
import { CommentItem } from './comment-item';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CommentListProps {
  comments: CommentType[];
  onAddComment: (commentText: string) => Promise<void>;
}

export function CommentList({ comments, onAddComment }: CommentListProps) {
    const [newComment, setNewComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const currentUserAvatar = PlaceHolderImages.find(img => img.id === 'user-current')?.imageUrl ?? '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            setIsSubmitting(true);
            await onAddComment(newComment);
            setNewComment('');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full pt-4 space-y-4">
            <form onSubmit={handleSubmit} className="flex items-start gap-4">
                <Avatar className="h-9 w-9 mt-1">
                    <AvatarImage src={currentUserAvatar} data-ai-hint="person portrait"/>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                    <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="min-h-[40px] rounded-lg"
                    />
                    <div className="flex justify-end">
                        <Button type="submit" size="sm" disabled={!newComment.trim() || isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
                            {isSubmitting ? 'Commenting...' : 'Comment'}
                        </Button>
                    </div>
                </div>
            </form>

            <div className="space-y-4">
                {comments.map(comment => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}
