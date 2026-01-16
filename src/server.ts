import { initDatabase } from '@/database';
import { Logger } from '@/infrastructure/logging/Logger';
import { WhatsAppConnector } from '@/modules/whatsapp/infrastructure/WhatsAppConector';
import { printQR } from '@/infrastructure/runtime/printQR';
import { processMessage } from '@/modules/whatsapp/application/messageProcessor'

export default async function server() {
	const logger = new Logger();
	const sessions = ["test2"];
	sessions.forEach(session => {
		const connector = new WhatsAppConnector({
			sessionId: session,
			events: {
				onQR: (qr) => {
					logger.info('QR', {botId: session});
					printQR(qr);
				},
				onConnected: () => {
					logger.info('WhatsApp conectado', {botId: session});
				},
				onMessage: (msg) => {
					const message = processMessage(msg);
					logger.info(JSON.stringify(message?.text), {botId: session});
				},
				onDisconnected(reason) {
					logger.info(`WhatsApp desconectado ${reason}`, {botId: session});
					connector.connect();
				},
			}
		});
		connector.connect();
	})
	logger.info('Server started');
}
