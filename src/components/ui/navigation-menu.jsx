import * as React from "react"
import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    />
  )
})
NavigationMenu.displayName = "NavigationMenu"

export { NavigationMenu }
