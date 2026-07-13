import * as React from "react"
import { cn } from "@/lib/utils"

const Collapsible = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Collapsible.displayName = "Collapsible"

export { Collapsible }
