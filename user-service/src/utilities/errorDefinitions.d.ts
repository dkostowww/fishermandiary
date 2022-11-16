export interface UserServiceErrorCodes {
  InternalServerError: string
  UserAlreadyExists: string
  ValidationFailed: string
  UserNotFound: string
  UnableToUpdateUser: string
}

export interface ErrorResponseProperties {
  value?: string
  msg: string
  param: string
  location: string
}
