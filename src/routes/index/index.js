async function index(request, env, ctx) {
	return Response.json({ Content: 'Hello world' });
}

export default index;
