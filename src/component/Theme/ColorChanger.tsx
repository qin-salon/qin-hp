import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { MagicWandIcon } from "@radix-ui/react-icons";
import type { ThemeToken } from "@stitches/react";
import type { VFC } from "react";
import { useCallback } from "react";
import { styled, theme } from "src/style";

export const ColorChanger: VFC = () => {
  const handleClick = useCallback(() => {
    const themeTokens = getCondidateThemeTokens(theme.colors);
    const themeToken = getRandom(themeTokens);
    document.body.style.color = themeToken.computedValue;
  }, []);

  return (
    <Button onClick={handleClick}>
      <AccessibleIcon label="Make the characters on the site a random color">
        <MagicWandIcon width={32} height={32} />
      </AccessibleIcon>
    </Button>
  );
};

// get condidate color from stiches theme colors
const getCondidateThemeTokens = (colors: typeof theme.colors): ThemeToken[] => {
  const themeTokens = Object.values(colors).filter((color) => {
    return color.token.endsWith("11") && color.token !== "gray11";
  });
  return [...themeTokens, theme.colors.gray12];
};

// get random value from string array
const getRandom = (arr: ThemeToken[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Button = styled("button", {
  size: "60px",
  paddingTop: "4px",
  display: "grid",
  placeItems: "center",
  borderRadius: "8px",
  color: "$gray11",
  backgroundColor: "$gray4",
  borderColor: "$gray7",
  "&:hover": {
    backgroundColor: "$gray5",
    borderColor: "$gray8",
  },
});
