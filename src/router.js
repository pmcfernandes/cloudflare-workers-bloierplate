import { Router } from 'itty-router';
import index from './routes/index';

const router = Router();

router.get('/api/index', index);

// Error if not exists
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
