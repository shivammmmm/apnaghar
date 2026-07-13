import * as React from "react"
import { cn } from "@/lib/utils"

const AspectRatio = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
