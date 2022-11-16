export interface AuthServiceErrorCodes {
  ValidationFailed: string
  UserNotFound: string
  IncorrectPassword: string
  InternalServerError: string
  Unauthorized: string
  Forbidden: string
}

export interface ErrorResponseProperties {
  value?: string
  msg: string
  param: string
  location: string
}
