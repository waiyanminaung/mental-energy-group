export interface Job {
  id: string;
  title: string;
  content: string;
  featured_image: string;
  created_at: string;
  status: 1 | 0;
}
