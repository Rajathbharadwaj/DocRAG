export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  readingTime: number;
  author: Author;
  featured?: boolean;
}