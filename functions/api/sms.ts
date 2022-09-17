import { sendJson } from '../utils/sendJson'

export const onRequestPost = async ({ request, env }) => {
	try {

		const body: { text: string } = request.body

		return sendJson({ ...body, to: env.SMS_NUM, api_id: env.SMS_API, json: true })

		// const res = await fetch('https://sms.ru/sms/send', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		...body,
		// 		to: env.SMS_NUM,
		// 		api_id: env.SMS_API,
		// 		json: true
		// 	})
		// })

		// const json = await res.json()

		// return sendJson(json)
	}
	catch(error) {
		return sendJson({ data: error.message }, 500)
	}
}