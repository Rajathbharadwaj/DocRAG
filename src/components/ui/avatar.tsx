import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(
          "rounded-full object-cover",
          className
        )}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";