import * as React from "react"
import { cn } from "@/lib/utils"

const Pagination = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Pagination.displayName = "Pagination"

export { Pagination }
