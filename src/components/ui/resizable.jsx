import * as React from "react"
import { cn } from "@/lib/utils"

const Resizable = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Resizable.displayName = "Resizable"

export { Resizable }
