import * as React from "react"
import { cn } from "@/lib/utils"

const Table = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Table.displayName = "Table"

export { Table }
