export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  isLive: boolean;
  category?: string; // What they are streaming
}

export interface Stream {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewerCount: number;
  user: User;
  category: string;
  tags: string[];
  startedAt: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  totalViewers: number;
  tags: string[];
}

export type SortOption = 'recommended' | 'viewers_high' | 'viewers_low' | 'latest';