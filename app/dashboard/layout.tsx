import { Navigation } from '@/components/pages/dashboard/navigation'
import { CircleHelp } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import * as motion from 'framer-motion/client'

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-10 right-10 z-10 bg-primary w-fit h-fit p-2 rounded-full"
          >
            <Link href={'/support'}>
              <CircleHelp size={32} className="text-white" />
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Precisa de ajuda?</p>
        </TooltipContent>
      </Tooltip>
      <Navigation />
      {children}
    </div>
  )
}
