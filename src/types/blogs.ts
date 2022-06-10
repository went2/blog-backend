export interface IBlogItem {
  id: number;
  title: string;
  abstract: string;
  views?: number;
  words?: number;
  createdAt: number;
}