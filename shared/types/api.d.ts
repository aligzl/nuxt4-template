export interface ApiError {
  statusCode: number
  statusMessage: string
  message: string
  data?: any
}