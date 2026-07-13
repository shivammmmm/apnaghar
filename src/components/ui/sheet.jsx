import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Sheet.displayName = "Sheet"

export { Sheet }
