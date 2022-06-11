import express from 'express';
import blogService from '../services/blogService';
import { parseUserInputBlogEntity } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(blogService.getBlogList());
});

router.get('/:id', (req, res) => {
  const blog = blogService.getBlogById(Number(req.params.id));

  if(blog) {
    res.send(blog);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  try {
    const newBlogEntry = parseUserInputBlogEntity(req.body);
    const { title, abstract, date } = newBlogEntry;
    const addedBlog = blogService.addBlog({ title, abstract, date });
    res.json(addedBlog);
  } catch(error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }
  
});

export default router;