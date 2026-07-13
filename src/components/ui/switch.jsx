import * as React from "react"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Switch.displayName = "Switch"

export { Switch }
