import * as React from "react"
import { cn } from "@/lib/utils"

const DropdownMenu = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
DropdownMenu.displayName = "DropdownMenu"

export { DropdownMenu }
