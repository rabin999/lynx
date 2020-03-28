import local from "./envrionments/local";
import development from "./envrionments/development";
import staging from "./envrionments/staging";
import qa from "./envrionments/qa";
import production from "./envrionments/production";


const configurations: any = {
    local,
    development,
    staging,
    qa,
    production
}


const environment: string = <string>process.env.NODE_ENV;
console.log(process.env.NODE_ENV)
if (!(environment in configurations)) {
    throw new Error("Environment file not found");
}

export default configurations[environment]
