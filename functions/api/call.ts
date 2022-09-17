import { tg } from '../utils/tg'
import { sendJson } from '../utils/sendJson'

export const onRequestPost = async ({ request, env }) => {
	try {

		const body: { name: string, phone: string, url: string } = await request.json()

		const res = await tg(env.TELEGRAM_API, 'sendMessage', {
			chat_id: env.TELEGRAM_CHAT_ID,
			text: `На сайте оставили заявку на обратный звонок

Страница: [${body.url}](${body.url})

Имя: *${body.name}*
Телефон: \`${body.phone}\``,
			parse_mode: 'MarkdownV2',
		})

		return sendJson(res)
	}
	catch(error) {
		return sendJson({ data: error.message }, 500)
	}
}