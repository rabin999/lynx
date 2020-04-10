import { createLogger, format, transports } from "winston";
import path from "path";

// Log formatting
const { combine, timestamp, prettyPrint, colorize, align } = format;

// log file location
const info_log_path = path.resolve(global.root_path, "../logs/info.log");
const debug_log_path = path.resolve(global.root_path, "../logs/debug.log");
const error_log_path = path.resolve(global.root_path, "../logs/error.log");

/*
* what is logger level ?
*
* severity of all levels is assumed to be numerically ascending from most important to least important.
* if you are going to create error log then it will append error level log to info and debug too or
* going to append all transporter you have defined because of priority
*
* suppose you are going to use debug level log which is at less priority and you haven't created silly
* level log, then the log only going to be reside in debug.log file
* */
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    align()
  ),
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  },
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.File({ filename: info_log_path, level: "info" }),
    new transports.File({ filename: error_log_path, level: "error" }),
    new transports.File({ filename: debug_log_path, level: "debug" })
  ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console({
    format: combine(
      format.simple(),
      colorize()
    )
  }));
}

export default logger
