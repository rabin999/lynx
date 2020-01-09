import development from './envrionments/development'
import staging from './envrionments/staging'
import qa from './envrionments/qa'
import production from './envrionments/production'

const configurations: any = {
    development,
    staging,
    qa, 
    production
}

process.env.APP_ENVIRONMENT = "development"
const environment = process.env.APP_ENVIRONMENT

if (!(environment in configurations)) {
    throw new Error('Environment not found');   
}

export default configurations[environment]