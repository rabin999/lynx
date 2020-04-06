import local from "./envrionments/local";
import staging from "./envrionments/staging";
import qa from "./envrionments/qa";
import production from "./envrionments/production";
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
