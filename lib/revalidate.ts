'use server'

import { revalidateTag } from 'next/cache'

export async function revalidateData(tag: string) {
  revalidateTag(tag)
  return { revalidated: true, now: Date.now() }
}
