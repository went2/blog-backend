import blogList from '../../data/blogList.json';
import { IBlogItem, IUserInputBlogItem } from '../types/blogs';

let blogs: IBlogItem[] = blogList;

const getBlogList = (): Array<IBlogItem> => {
  return blogs;
};

const getBlogById = (id: number): IBlogItem | undefined => {
  const result = blogs.find((item) => item.id === id);
  return result;
};

const addBlog = (newBlogItem: IUserInputBlogItem) => {
  const newBlogEntry = {
    id: Math.max(...blogs.map(d => d.id)) + 1,
    createdAt: Date.now(),
    ...newBlogItem
  };

  blogs = [...blogs, newBlogEntry];

  return newBlogEntry;
};

const deleteBlog = (id: number): IBlogItem[] => {
  return blogs.filter(blog => blog.id !== id);
};

export default {
  getBlogList,
  addBlog,
  getBlogById,
  deleteBlog
};