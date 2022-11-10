import { cva } from "class-variance-authority";

const headerStyles = cva("mx-auto", {
  variants: {
    variant: {
      "5xl": ["max-w-5xl"],
      "7xl": ["max-w-7xl"],
    },
  },
  defaultVariants: {
    variant: "5xl",
  },
});

export function Container({ variant = "5xl", as = "div", className, children, ...props }) {
  const Component = as;

  return (
    <Component className={headerStyles({ variant, className, ...props })}>{children}</Component>
  );
}
