export interface Blog {
  id: string | number;
  title: string;
  category: string[]; 
  description: string;
  date: string;
  coverImage: string;
  content: string;
  author?: string; 
}