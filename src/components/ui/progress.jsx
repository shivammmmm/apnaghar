import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Progress.displayName = "Progress"

export { Progress }
