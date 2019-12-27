import HttpException from './HttpException';

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super({
      status: 401,
      message: "Authentication token missing"
    })
  }
}

export default AuthenticationTokenMissingException