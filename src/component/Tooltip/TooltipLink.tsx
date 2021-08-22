import type { AnchorHTMLAttributes, VFC } from "react";
import { styled } from "src/style";

import { TooltipBase } from "./TooltipBase";

type TooltipLinkProps = {
  label: string;
  text: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * @package
 */
export const TooltipLink: VFC<TooltipLinkProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { label, text, ...rest } = props;

  return (
    <TooltipBase label={label} as={Anchor} {...rest}>
      {text}
    </TooltipBase>
  );
};

const Anchor = styled("a", {
  textDecoration: "underline",
});
