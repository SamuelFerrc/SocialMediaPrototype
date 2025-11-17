import { formatDistanceToNow } from 'date-fns';
import type { Comment as CommentType } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommentItemProps {
  comment: CommentType;
}

export function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-9 w-9">
        <AvatarImage src={comment.user.avatarUrl} alt={comment.user.name} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-secondary/70 rounded-lg px-3 py-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm text-foreground">{comment.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm mt-1 text-foreground/90">{comment.text}</p>
        </div>
      </div>
    </div>
  );
}
