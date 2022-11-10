import { cva } from "class-variance-authority";
import { BaseButton } from "./BaseButton";

const buttonStyles = cva(
  "rounded-lg inline-flex items-center relative justify-center px-[24px] py-[14px]",
  {
    variants: {
      fullWidth: { true: "w-full" },
      variant: {
        primary: "bg-black text-white text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function Button({
  children,
  variant = "primary",
  fullWidth = false,
  leftIcon,
  className,
  ...props
}) {
  return (
    <BaseButton {...props} className={buttonStyles({ fullWidth, variant, className })}>
      {leftIcon ? <span className="mr-3 [display:inherit]">{leftIcon}</span> : null}
      {children}
    </BaseButton>
  );
}
