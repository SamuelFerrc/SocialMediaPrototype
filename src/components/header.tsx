import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';

export function Header() {
  const currentUserAvatar = PlaceHolderImages.find(img => img.id === 'user-current')?.imageUrl ?? '';

  return (
    <header className="bg-card border-b sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto max-w-5xl flex justify-between items-center p-3">
        <Link href="/feed" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
          <div />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-primary/50">
                <AvatarImage src={currentUserAvatar} alt="Current User" data-ai-hint="person portrait" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Current User</p>
                <p className="text-xs leading-none text-muted-foreground">user@echosphere.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
