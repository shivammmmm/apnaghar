import * as React from "react"
import { cn } from "@/lib/utils"

const InputOtp = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
InputOtp.displayName = "InputOtp"

export { InputOtp }
