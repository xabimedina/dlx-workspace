import * as React from "react";
import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const UnderlineLink = () => (
  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-saffron transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
);

export const DlxLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      {...props}
      className={cn(
        "relative cursor-pointer group transition-all duration-200",
        className
      )}
    >
      {children}
      <UnderlineLink />
    </a>
  )
);

DlxLink.displayName = "DlxLink";
