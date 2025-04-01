import nodemailer from 'nodemailer';
import config from '../config/config.js';


export default class MailingService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			port: 587,
			auth: {
				user: config.mailing.user,
				pass: config.mailing.pass,
			},
		});
 	}

	sendMail = async (mailRequest) => {
		const result = await this.transporter.sendMail(mailRequest);
		return result;
	};
}
