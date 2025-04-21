import type { UseFetchOptions } from 'nuxt/app'
import type { NitroFetchRequest } from 'nitropack'
import { defu } from 'defu'

interface FetchOptions<T> extends UseFetchOptions<T> {
  getCache?: boolean
}
const ttl = 1000 * 60 // 60 seconds

export default async function useApi<T>(
  url: Ref<NitroFetchRequest> | NitroFetchRequest | (() => NitroFetchRequest),
  options?: FetchOptions<T>
) {
  const nuxtApp = useNuxtApp()
  const expirationDates = useState<Record<string, number>>('api-cache-expiration', () => ({}))
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
        expirationDates.value[key] = Date.now() + ttl
        return
      }

      // Is the data too old?
      if (expirationDates.value[key] !== undefined && expirationDates.value[key] < Date.now()) {
        // Refetch the data
        const now = Date.now()
        expirationDates.value[key] = now + ttl
        // const now = Date.now()
        expirationDates.value = Object.fromEntries(
          Object.entries(expirationDates.value).filter(([_, expiration]) => expiration >= now)
        )
        return
      }

      return data
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
