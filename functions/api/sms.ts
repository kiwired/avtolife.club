import { sendJson } from '../utils/sendJson'

export const onRequestPost = async ({ request, env }) => {
	try {

		// const body = await request.json<{ to: string, text: string }>()

		// const res = await fetch('https://sms.ru/sms/send', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({ ...body, api_id: env.SMS_API, json: true })
		// })

		// const json = await res.json()

		// return sendJson(json)
		return sendJson({})

	}
	catch(error) {
		return sendJson(error.message)
	}
}