import * as React from "react"
import { cn } from "@/lib/utils"

const Toggle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Toggle.displayName = "Toggle"

export { Toggle }
