export interface IBlogItem {
  id: number;
  title: string;
  abstract: string;
  date: string;
  views?: number;
  words?: number;
  createdAt: number;
}

export type IUserInputBlogItem = Omit<IBlogItem, 'id'| 'views' | 'words' | 'createdAt'>;