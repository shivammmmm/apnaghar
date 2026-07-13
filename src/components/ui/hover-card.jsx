import * as React from "react"
import { cn } from "@/lib/utils"

const HoverCard = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
HoverCard.displayName = "HoverCard"

export { HoverCard }
