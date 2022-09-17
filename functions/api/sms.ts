import { sendJson } from '../utils/sendJson'

const obj2query = (obj) => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

export const onRequestPost = async ({ request, env }) => {
	try {

		const body: { text: string } = await request.json()

		const res = await fetch('https://sms.ru/sms/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: obj2query({
				msg: body.text,
				to: env.SMS_NUM,
				api_id: env.SMS_API,
				json: 1
			})
		})

		const json = await res.json<{ status: string, status_text: string, sms?: any }>()
		
		if (json.status !== 'OK') {
			throw new Error(json.status_text)
		}

		return sendJson(json.sms)
	}
	catch(error) {
		return sendJson({ data: `При выполнении запроса возникла ошибка: ${error.message}` }, 500)
	}
}