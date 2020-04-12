import { createLogger, format, transports } from "winston";
import path from "path";
const winstonGraylog2 = require("winston-graylog2")
import graylog2 from "graylog2"

// Log formatting
const { combine, timestamp, prettyPrint, colorize, align, errors } = format;

// log file location
const info_log_path = path.resolve(global.root_path, "../logs/info.log");
const debug_log_path = path.resolve(global.root_path, "../logs/debug.log");
const error_log_path = path.resolve(global.root_path, "../logs/error.log");

// Graylog Configuration
const graylog_config = {
  servers: [
    { "host": process.env.GRAYLOG_DEFAULT_HOST, port: Number(process.env.GRAYLOG_DEFAULT_PORT) }
  ]
}

// extra metadata for logger
const defaultMeta = { service: "user-service" }

// Logger setup
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    align(),
    errors({ stack: true })
  ),
  exitOnError: false,
  defaultMeta,
  transports: [
    new transports.File({ filename: info_log_path, level: "info" }),
    new transports.File({ filename: error_log_path, level: "error" }),
    new transports.File({ filename: debug_log_path, level: "debug" }),
    new winstonGraylog2({
      handleExceptions: true,
      name: "Graylog",
      level: "debug",
      graylog: graylog_config,
      staticMeta: defaultMeta
    })
  ]
})

export const graylog = new graylog2.graylog(graylog_config)

export default logger
