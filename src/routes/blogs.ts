import express from 'express';
import blogService from '../services/blogService';

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
  const {title, abstract} = req.body;
  const newBlog = blogService.addBlog(
    title,
    abstract
  );
  
  res.json(newBlog);
});

export default router;