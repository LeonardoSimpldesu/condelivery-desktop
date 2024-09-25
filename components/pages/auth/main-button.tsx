import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as motion from 'framer-motion/client'

export function MainButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Button asChild>
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
