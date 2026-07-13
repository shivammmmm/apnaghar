import * as React from "react"
import { cn } from "@/lib/utils"

const ToggleGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
ToggleGroup.displayName = "ToggleGroup"

export { ToggleGroup }
