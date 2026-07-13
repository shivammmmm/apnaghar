import * as React from "react"
import { cn } from "@/lib/utils"

const Drawer = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Drawer.displayName = "Drawer"

export { Drawer }
