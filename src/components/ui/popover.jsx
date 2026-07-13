import * as React from "react"
import { cn } from "@/lib/utils"

const Popover = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Popover.displayName = "Popover"

export { Popover }
