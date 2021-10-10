import { LogglyTracker } from 'loggly-jslogger'

const logger = new LogglyTracker()

logger.push({ logglyKey: '04fa1577-1aba-49ea-b19e-a3da91eeee6f' })

export default logger
