// marking an error object as operational 
const myError = new Error('How can I add new product when no value provided?');
myError.isOperational = true;

// some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
export class AppError extends Error {
    public readonly commonType: string;
    public readonly isOperational: boolean;
  
    constructor(commonType: string, description: string, isOperational: boolean) {
      super(description);
  
      Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  
      this.commonType = commonType;
      this.isOperational = isOperational;
  
      Error.captureStackTrace(this);
    }
  }
  
  // marking an error object as operational (true)
  throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);