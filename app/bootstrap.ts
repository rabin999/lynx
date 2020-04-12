// Initializing DotEnv
import dotenv from "dotenv";
import path from "path";
import { init } from "@sentry/node";

dotenv.config({
  path: process.env.NODE_ENV ? path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`) : path.resolve(__dirname, `../.env`)
});

// Init sentry
if (process.env.NODE_ENV === "production") {
  init({ dsn: process.env.SENTRY_DSN })
}

// Bootstraping Global NameSpace for NodeJS
declare global {
  namespace NodeJS {
    interface Global {
      [key: string]: string
    }
  }
}
global.root_path = path.resolve(__dirname);
