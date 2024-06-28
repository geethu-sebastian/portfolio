import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="/Geethu Sebastian - Resume.pdf" className={cn(buttonVariants({ variant: "default", size: "lg" }))} target="_blank" rel="noopener noreferrer">
        <Download className="mx-1" />
        Download Resume
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn
