import development from './envrionments/development'
import staging from './envrionments/staging'
import qa from './envrionments/qa'
import production from './envrionments/production'

const environment = process.env.APP_ENVIRONMENT || 'development'

export default environment
