import * as React from "react"
import { cn } from "@/lib/utils"

const Chart = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Chart.displayName = "Chart"

export { Chart }
