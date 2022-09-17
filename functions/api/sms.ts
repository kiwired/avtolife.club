import { sendJson } from '../utils/sendJson'

export const onRequestPost = async ({ request, env }) => {
	try {

		const body: { to: string, text: string } = JSON.parse(request.body)

		const res = await fetch('https://sms.ru/sms/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...body, api_id: env.SMS_API, json: true })
		})

		const json = await res.json()

		return sendJson(json)

	}
	catch(error) {
		return sendJson(error.message)
	}
}