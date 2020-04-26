import { MongoDBConfigInterface } from "./database";
import I18nConfigInterface from "./i18n";
import MailConfigInterface from "./mail";
import StorageConfigInterface from "./storage";
import AppConfigInterface from "./app";
import LoggerConfigInterface from "./logging";

export default interface MasterConfigInterface {
    [key: string]: {
        app: AppConfigInterface,
        database: MongoDBConfigInterface,
        i18n: I18nConfigInterface,
        mail: MailConfigInterface,
        storage?: StorageConfigInterface,
        logger?: LoggerConfigInterface
    }
}
