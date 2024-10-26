'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as motion from 'framer-motion/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function MainButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const router = useRouter()
  return (
    <Button asChild onClick={() => router.push('dashboard')}>
      <motion.button
        className={cn('py-6', className)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.button>
    </Button>
  )
}
