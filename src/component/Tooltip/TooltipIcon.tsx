import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import type { MouseEventHandler, VFC } from "react";
import { cloneElement } from "react";
import { styled } from "src/style";

import { TooltipBase } from "./TooltipBase";

type TooltipIconProps = {
  label: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * @package
 */
export const TooltipIcon: VFC<TooltipIconProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { label, icon, ...rest } = props;

  return (
    <TooltipBase label={label} as={Button} {...rest}>
      <AccessibleIcon label={label}>{cloneElement(icon, { width: 32, height: 32 })}</AccessibleIcon>
    </TooltipBase>
  );
};

const Button = styled("button", {
  size: "60px",
  display: "grid",
  placeItems: "center",
  borderRadius: 8,
  color: "$gray11",
  backgroundColor: "$gray4",
  borderColor: "$gray7",
  "&:hover": {
    backgroundColor: "$gray5",
    borderColor: "$gray8",
  },
});
