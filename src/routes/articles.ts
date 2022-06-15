/**
 * @file Article routes: serve '/api/articles' endpoint
 * @module routes/articles
 * @author James <https://github.com/went2>
 */
import express from 'express';
import articleService from '../services/article.service';

const router = express.Router();

router.post('/', articleService.articleCreate);

router.post('/:id/delete', articleService.articleDelete);

router.post('/:id/update', articleService.articleUpdate);

router.get('/', articleService.articleList);

router.get('/:id', articleService.articleDetail);

export default router;
