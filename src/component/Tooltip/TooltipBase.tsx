import type { TooltipTriggerProps } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import type { ReactNode, VFC } from "react";
import { keyframes, styled } from "src/style";

type TooltipBaseProps = {
  label: string;
  children: ReactNode;
  tooltipTriggerProps?: TooltipTriggerProps;
};

/**
 * @package
 */
export const TooltipBase: VFC<TooltipBaseProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { label, children, tooltipTriggerProps } = props;

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger {...tooltipTriggerProps}>{children}</TooltipTrigger>
      <StyledContent sideOffset={5}>
        {label}
        <StyledArrow offset={25} />
      </StyledContent>
    </Tooltip>
  );
};

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const StyledContent = styled(TooltipContent, {
  borderRadius: 8,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  color: "$blackA11",
  backgroundColor: "white",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
    },
  },
});

const StyledArrow = styled(TooltipArrow, {
  fill: "white",
});
