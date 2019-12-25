import pino from 'pino'
let logger = pino()

function sendMailToAdminIfCritical() {}
function saveInOpsQueueIfCritical() {}
function determineIfOperationalError() {}

class ErrorHandler {
    public async handleError(err: Error): Promise<void> {
        await logger.error(err);
        await sendMailToAdminIfCritical();
        await saveInOpsQueueIfCritical();
        await determineIfOperationalError();
    }
}

export const handler = new ErrorHandler();