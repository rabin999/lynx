import { LynxRequest, LynxResponse } from "../service/route/types";
import HttpException from "../exception/HttpException"
import pino from "pino"
import config from "../../config"

const logger = pino()
function errorMiddleware(error: HttpException, request: LynxRequest, response: LynxResponse, next: NextFunction) {

    if (config.env !== "production") {
      logger.debug(error.toString());
    } else {
      logger.error(error.toString());
    }

    /**
     * Parse JSON Syntax error
     */
    if (error instanceof SyntaxError) {

      const statusCode = 500
      const message = error.message

      response.status(statusCode).send(new HttpException({
        status: statusCode,
        message
      }).parse())

    } else {

      const statusCode = error.params.status || 500
      const message = error.message || "Something went wrong"

      response.status(statusCode).send(new HttpException({
        status: statusCode,
        message
      }).parse())

    }
  }

  export default errorMiddleware
