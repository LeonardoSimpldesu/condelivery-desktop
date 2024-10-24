// import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import env from '@/config/env'

type NextFetchRequestConfig = {
  revalidate?: number | false
  tags?: string[]
}

type TFetchOptions = RequestInit & {
  filters?: {
    key: string
    value: string | number
  }[]
  next?: NextFetchRequestConfig
}

export async function Fetcher<T>(
  endpoint: string,
  options: TFetchOptions = {},
): Promise<T> {
  // const tokenName: string = env.TOKEN_NAME
  // let token: RequestCookie | undefined | string | null
  // if (typeof window === 'undefined') {
  //   token = cookies().get(tokenName)
  // } else {
  //   token = require(headers).get(tokenName)
  // }

  if (options?.filters) {
    const filters = options.filters
    endpoint += '?'
    filters.forEach(({ key, value }, index) => {
      endpoint += `${key}=${value}${index < filters.length - 1 ? '&' : ''}`
    })
  }

  const defaultOptions: RequestInit & NextFetchRequestConfig = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: token ? `Bearer ${token}` : '',
      ...options?.headers,
    },
    cache: 'no-store',
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

  const response = await fetch(env.BASE_URL + endpoint, mergedOptions)

  return (await response.json()) as T
}
