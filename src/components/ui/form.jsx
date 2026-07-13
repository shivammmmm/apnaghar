import * as React from "react"
import { cn } from "@/lib/utils"

const Form = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
Form.displayName = "Form"

export { Form }
