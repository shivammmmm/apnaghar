import * as React from "react"
import { cn } from "@/lib/utils"

const ContextMenu = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
ContextMenu.displayName = "ContextMenu"

export { ContextMenu }
