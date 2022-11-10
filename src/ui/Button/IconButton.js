import { cva } from "class-variance-authority";

import { BaseButton } from "./BaseButton";

const iconButtonStyles = cva(
  "p-[16px] flex items-center justify-center rounded-lg border-[3px] border-black bg-[#D0DAFF]"
);

export function IconButton({ children, className, ...props }) {
  return (
    <BaseButton {...props} className={iconButtonStyles({ className })}>
      {children}
    </BaseButton>
  );
}
