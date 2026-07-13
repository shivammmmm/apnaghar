import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
