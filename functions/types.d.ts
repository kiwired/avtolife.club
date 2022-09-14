
interface SMSResponseSMS {
	[key: string]: SMSResponseSMSItem
}

interface SMSResponseSMSItem {
	status: string
	status_code: number
	sms_id: string
}

declare interface SMSResponse {
	status: string
	status_code: number
	balance: number
	sms: SMSResponseSMS
}