import blogList from '../../data/blogList.json';
import { IBlogItem } from '../types/blogs';

let blogs: IBlogItem[] = blogList;

const getBlogList = (): Array<IBlogItem> => {
  return blogs;
};

const getBlogById = (id:number): IBlogItem | undefined => {
  const result  = blogs.find((item) => item.id === id);
  return result;
};

const addBlog = (
    title: string, abstract: string
  ) => {
  const newBlogEntry = {
    id: Math.max(...blogs.map(d=>d.id)) + 1,
    title,
    abstract,
    createdAt: Date.now()
  };
  
  blogs = [...blogs, newBlogEntry];

  return newBlogEntry;
};

export default {
  getBlogList,
  addBlog,
  getBlogById
};