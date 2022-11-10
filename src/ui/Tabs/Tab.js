import { useContext } from "react";
import { cva } from "class-variance-authority";
import { TabsContext } from "./context";

import { BaseButton } from "../Button/BaseButton";

const tabStyles = cva(
  "rounded-t-lg border-b-4 py-4 text-center text-1xl hover:border-black hover:bg-gray-200",
  {
    variants: {
      active: { true: "border-black bg-gray-200", false: "border-gray-200" },
      fullWidth: { true: "w-full" },
    },
  }
);

export function Tab({ value, fullWidth, children, ...props }) {
  const context = useContext(TabsContext);

  function handleChange() {
    context.onChange(value);
  }

  const active = value === context.value;

  return (
    <BaseButton {...props} onClick={handleChange} className={tabStyles({ active, fullWidth })}>
      {children}
    </BaseButton>
  );
}
