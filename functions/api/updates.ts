import { tg } from '../utils/tg'
import { sendJson } from '../utils/sendJson'

export const onRequestGet = async ({ env }) => {
	try {

		const res = await tg(env.TELEGRAM_API, 'getUpdates')

		return sendJson(res)
	}
	catch(error) {
		return sendJson({ data: error.message }, 500)
	}
}