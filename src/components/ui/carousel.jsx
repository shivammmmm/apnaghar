import * as React from "react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Carousel.displayName = "Carousel"

export { Carousel }
