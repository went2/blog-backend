import express from 'express';
import blogService from '../services/blogService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(blogService.getBlogList());
});

router.post('/', (_req, res) => {
  res.send('saving a blog');
});

export default router;