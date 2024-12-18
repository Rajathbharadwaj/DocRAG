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

export enum ContentType {
  ARTICLE = "article",
  DOCUMENTATION = "documentation",
  MEDIA = "media",
  ACADEMIC = "academic",
  GITHUB = "github",
  STACKOVERFLOW = "stackoverflow",
  API = "api"
}

export interface IndexingStatus {
  status: 'processing' | 'complete' | 'error';
  urls_processed: number;
  urls_queued: number;
  is_complete: boolean;
  background_task_active: boolean;
  visited_urls: string[];
  queued_urls: string[];
}

export interface IndexingResponse {
  status: string;
  message: string;
  doc_name: string;
}

export interface ProjectFormData {
  name: string;
  url: string;
  description: string;
  contentType: ContentType;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  content_type: ContentType;
  doc_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  indexing_status?: string;
  indexing_error?: string;
}