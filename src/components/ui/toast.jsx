import * as React from "react"
import { cn } from "@/lib/utils"

const Toast = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Toast.displayName = "Toast"

export { Toast }
