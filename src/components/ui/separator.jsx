import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Separator.displayName = "Separator"

export { Separator }
