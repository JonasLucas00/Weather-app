import express from 'express';
const router = express.Router();
import serverHello from '../controllers/testCon.js';

router.get('/', serverHello)

export default router