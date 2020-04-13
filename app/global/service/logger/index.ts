import path from "path";
import config from "../../../config/index";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, prettyPrint, align, errors } = format;

/*
* ------------------------------
* LOGGER
* ------------------------------
*
* Default location: <root>/logs
* Default log levels: info, debug, error
*
* Allowed levels
* error: 0
* warn: 1
* info: 2
* http: 3
* verbose: 4
* debug: 5
* silly: 6
*
* */

if (!config.logger) {
  throw new Error("Logger config is not exported from envrionment file, make sure it exits and exported");
}

let transporters: any = [];
const root_path: string = !!config.logger.logs.root_location ? config.logger.logs.root_location.trim() : "logs";
let rotate_using_date: string = "";

/*
* Creating filename prefix if rotate_by_date is true
* */
if (!!config.logger.rotate_using_date) {
  const today = new Date();
  rotate_using_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}

/*
* Setting up transporter and levels
* */

if (config.logger.logs.levels && config.logger.logs.levels.length) {

  config.logger.logs.levels.forEach((level: string) => {
    const filename = rotate_using_date ? `${rotate_using_date}-${level}.log` : `${level}.log`;
    const info_log_path = path.resolve(global.root_path, root_path, filename);

    transporters.push(
      new transports.File({ filename: info_log_path, level })
    );
  });

} else {

  const info_log_path = path.resolve(global.root_path, "logs/", rotate_using_date ? `${rotate_using_date}-info.log` : `info.log`);
  const debug_log_path = path.resolve(global.root_path, "logs/", rotate_using_date ? `${rotate_using_date}-debug.log` : `debug.log`);
  const error_log_path = path.resolve(global.root_path, "logs/", rotate_using_date ? `${rotate_using_date}-error.log` : `error.log`);

  transporters.push(
    new transports.File({ filename: info_log_path, level: "info" }),
    new transports.File({ filename: debug_log_path, level: "debug" }),
    new transports.File({ filename: error_log_path, level: "error" })
  );

}

/*
* Graylog Configuration
* */
if (config.logger.graylog.enable) {

  // Graylog Transporter for winson
  let winstonGraylog2 = require("winston-graylog2");

  // Graylog config
  let graylog_config = {
    servers: config.logger.graylog.servers
  };

  transporters.push(
    new winstonGraylog2({
      handleExceptions: config.logger.graylog.handleExceptions ? config.logger.graylog.handleExceptions : true,
      name: config.logger.graylog.name,
      level: config.logger.graylog.level,
      graylog: graylog_config,
      staticMeta: config.logger.defaultMeta
    })
  );
}

// Logger setup
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    align(),
    errors({ stack: config.logger.errorStack })
  ),
  exitOnError: config.logger.exitOnError,
  defaultMeta: config.logger.defaultMeta,
  transports: transporters
});

export default logger;
