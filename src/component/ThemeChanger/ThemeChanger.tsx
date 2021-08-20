import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "src/style";

/**
 * @package
 */
export const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    return setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleClickLight = () => {
    setTheme("light");
  };
  const handleClickSystem = () => {
    setTheme("system");
  };
  const handleClickDark = () => {
    setTheme("dark");
  };

  return (
    <div>
      <p>The current theme is: {theme}</p>
      <p>The resolvedTheme is: {resolvedTheme}</p>
      <Button onClick={handleClickLight}>Light Mode</Button>
      <Button onClick={handleClickSystem}>System Mode</Button>
      <Button onClick={handleClickDark}>Dark Mode</Button>
    </div>
  );
};

const Button = styled("button", {
  backgroundColor: "$blue4",
  size: "150px",
  color: "$blue11",
  borderColor: "$blue7",
  "&:hover": {
    backgroundColor: "$blue5",
    borderColor: "$blue8",
  },
});
