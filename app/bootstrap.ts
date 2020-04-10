// Initializing DotEnv
import dotenv from "dotenv";
import path from "path";
import { init } from "@sentry/node";

dotenv.config({
  path: process.env.NODE_ENV ? path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`) : path.resolve(__dirname, `../.env`)
});

// Init sentry
if (process.env.NODE_ENV === "production") {
  init({ dsn: "https://1d52a185eb0245f8a0d442e65199711a@o374893.ingest.sentry.io/5193584" })
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
