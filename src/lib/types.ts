

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  text: string;
  user: User;
  timestamp: string;
}

export interface Post {
  id: string;
  content: string;
  user: User;
  timestamp: string;
  likes: number;
  comments: Comment[];
}
