export interface IBlogItem {
  id: number;
  title: string;
  abstract: string;
  date: string;
}

export type IUserInputBlogItem = Omit<IBlogItem, 'id'>;