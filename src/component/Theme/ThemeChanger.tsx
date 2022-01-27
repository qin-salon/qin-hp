import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import type { VFC } from "react";
import { TooltipIcon } from "src/component/Tooltip";

/**
 * @package
 */
export const ThemeChanger: VFC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const oppositeColor = resolvedTheme === "dark" ? "light" : "dark";
  const handleClick = () => {
    setTheme(oppositeColor);
  };

  return (
    <TooltipIcon
      label={`Change to ${oppositeColor} theme`}
      icon={resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={handleClick}
    />
  );
};
