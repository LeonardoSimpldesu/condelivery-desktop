import { headers, cookies } from 'next/headers'
import env from '@/config/env'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

type TFetcherProps = {
  endpoint: string
  options?: {
    filters?: {
      name: string
      value: string | number
    }[]
    headers?: {
      name: string
      value: string
    }
  }
}

export async function Fetcher<T>({
  endpoint,
  options,
}: TFetcherProps): Promise<T> {
  const tokenName: string = env.TOKEN_NAME
  let token: RequestCookie | undefined | string | null
  if (typeof window === 'undefined') {
    token = cookies().get(tokenName)
  } else {
    token = headers().get(tokenName)
  }

  if (options?.filters) {
    const filters = options.filters
    endpoint += '?'
    filters.forEach(({ name, value }, index) => {
      endpoint += `${name}=${value}${index < filters.length - 1 ? '&' : ''}`
    })
  }

  const response = await fetch(env.BASE_URL + endpoint, {
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options?.headers,
    },
  })

  return (await response.json()) as T
}
