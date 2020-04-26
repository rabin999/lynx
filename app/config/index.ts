import local from "@environments/local";
import staging from "@environments/staging";
import qa from "@environments/qa";
import production from "@environments/production";
import MasterConfigInterface from "./interface/master";

const configurations: MasterConfigInterface = {
    local,
    staging,
    qa,
    production
}

const environment: string = <string>process.env.NODE_ENV;
if (!(environment in configurations)) {
    throw new Error("Environment file not found");
}

export default configurations[environment]
