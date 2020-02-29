import fs from "fs"
import path from "path"
import config from "../../config"

const rawdata:any = fs.readFileSync(path.resolve(__dirname, `${config.i18n.locale}.json`))
const lang = JSON.parse(rawdata);

export default lang