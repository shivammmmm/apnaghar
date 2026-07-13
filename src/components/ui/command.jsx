import * as React from "react"
import { cn } from "@/lib/utils"

const Command = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Command.displayName = "Command"

export { Command }
