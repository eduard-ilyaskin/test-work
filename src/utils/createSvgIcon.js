import { forwardRef } from "react";
import { cva } from "class-variance-authority";

const iconStyles = cva("inline-block h-[1em] w-[1em] shrink-0 fill-current", {
  variants: {
    size: { small: "text-[22px]", default: "text-[32px]", large: "text-[46px]" },
  },
  defaultVariants: {
    size: "default",
  },
});

export function createSvgIcon(path, viewBox = "0 0 32 32") {
  const Component = ({ className, size = "default", ...props }, ref) => {
    return (
      <svg ref={ref} viewBox={viewBox} {...props} className={iconStyles({ className, size })}>
        {path}
      </svg>
    );
  };

  return forwardRef(Component);
}
