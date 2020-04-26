import LoggerConfigInterface from "../../interface/logging";

const logger: LoggerConfigInterface = {
  level: {
    default: "debug"
  },
  rotate_using_date: true,
  logs: {
    root_location: `logs`,
    levels: ["info", "debug", "error"]
  },
  defaultMeta: { service: "user-service" },
  errorStack: true,
  exitOnError: false,
  graylog: {
    enable: true,
    name: "Graylog",
    level: "debug",
    servers: [
      {
        host: process.env.GRAYLOG_DEFAULT_HOST,
        port: Number(process.env.GRAYLOG_DEFAULT_PORT)
      }
    ],
    handleExceptions: true
  }
};

export default logger;
