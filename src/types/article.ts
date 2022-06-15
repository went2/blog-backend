
// interface representing a document in MongoDB
export interface IArticle {
  abstract: string;
  category?: number[];
  content: string;
  date: string;
  id?: number;
  keywords?: string[];
  lang?: string;
  isOriginal?: 1 | 2; // 1是 2否
  tag?: number[];
  title: string;
  views: number;
}

export type IUserCreatedArticle = Omit<IArticle, 'id' | 'category' | 'keywords' | 'lang' | 'isOriginal' | 'tag' | 'views'>;