import express from 'express';
import {
  getPost,
} from '../controllers/postController';

const router = express.Router();

router.get('/getPost', getPost) //get post
export = router;