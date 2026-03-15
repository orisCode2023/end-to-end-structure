import express from 'express';

const router = express.Router();

router.get('/', 'controller Function');
router.post('/', 'controller Function');
router.put('/', 'controller Function');
router.delete('/', 'controller Function');

export default router;