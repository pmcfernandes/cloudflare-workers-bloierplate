import apiRouter from './router';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		if (url.pathname.startsWith('/api/')) {
			return apiRouter.handle(request, env, ctx);
		} else {
			return new Response(env.HELLO, {
				headers: {
					'Content-Type': 'text/html'
				}
			});
		}
	}
}
