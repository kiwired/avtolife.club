export const sendJson = (value: any, status: number = 200) => {
	return new Response(JSON.stringify(value), {
		headers: {
			'Content-Type': 'application/json',
		},
		status
	})
}
	