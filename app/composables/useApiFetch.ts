import type { NitroFetchRequest } from 'nitropack'
import { defu } from 'defu'

type $FetchType = typeof $fetch
type ReqOptions = Parameters<$FetchType>[1]
export default async function useApiFetch<T>(url: NitroFetchRequest, options?: ReqOptions) {
  const defaults: ReqOptions = {

    onResponseError({ response }) {
      const error: ApiError = {
        statusCode: response.status,
        statusMessage: response._data?.statusMessage || 'Unknown error',
        message: response._data?.message || 'An error occurred',
        data: response._data
      }
      return Promise.reject(error)
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return $fetch<T>(url, params)
}
