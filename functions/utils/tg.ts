export const tg = (apiKey: string, method: string, query: any = {}) => {
	const params = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(query)
	}
	return fetch(`https://api.telegram.org/bot${apiKey}/${method}`, params)
		.then((res) => res.json<{ ok: boolean, description?: string, result: any }>())
		.then((res) => {
			console.log(res)
			if (res.ok !== true) {
				throw new Error(res.description)
			}
			return res.result
		})
}