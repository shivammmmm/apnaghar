import * as React from "react"
import { cn } from "@/lib/utils"

const Calendar = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Calendar.displayName = "Calendar"

export { Calendar }
