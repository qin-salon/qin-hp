import { MagicWandIcon } from "@radix-ui/react-icons";
import type { VFC } from "react";
import { useCallback } from "react";
import { TooltipIcon } from "src/component/Tooltip";
import { theme } from "src/style";

export const ColorChanger: VFC = () => {
  const handleClick = useCallback(() => {
    const themeTokens = getCondidateThemeTokens(theme.colors);
    const themeToken = getRandom(themeTokens);
    document.body.style.color = themeToken.computedValue;
  }, []);

  return <TooltipIcon label="Change text color" icon={<MagicWandIcon />} onClick={handleClick} />;
};

type Colors = typeof theme.colors;

type Tokens = Colors[keyof Colors][];

// get condidate color from stiches theme colors
const getCondidateThemeTokens = (colors: Colors): Tokens => {
  const themeTokens = Object.values(colors).filter((color) => {
    return color.token.endsWith("11") && color.token !== "gray11" && color.token !== "blackA11";
  });
  return [...themeTokens, theme.colors.gray12];
};

// get random value from string array
const getRandom = (arr: Tokens) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
