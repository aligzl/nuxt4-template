import type { UseFetchOptions } from 'nuxt/app'
import type { NitroFetchRequest } from 'nitropack'
import { defu } from 'defu'

interface FetchOptions<T> extends UseFetchOptions<T> {
  getCache?: boolean
}
const ttl = 1000 * 60 // 60 seconds
const expirationDates: Record<string, number> = {}

export default async function useApi<T>(
  url: Ref<NitroFetchRequest> | NitroFetchRequest | (() => NitroFetchRequest),
  options?: FetchOptions<T>
) {
  const nuxtApp = useNuxtApp()

  const defaults: FetchOptions<T> = {
    watch: false,
    deep: false,
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
  if (options?.getCache) {
    options.getCachedData = (key) => {
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      // If data is not fetched yet
      if (!data) {
        // Fetch the first time
        expirationDates[key] = Date.now() + ttl
        return
      }

      // Is the data too old?
      if (expirationDates[key] !== undefined && expirationDates[key] < Date.now()) {
        // Refetch the data
        expirationDates[key] = Date.now() + ttl
        return
      }

      return data
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}