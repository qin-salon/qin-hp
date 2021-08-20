import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { styled } from "src/style";

/**
 * @package
 */
export const ThemeChanger = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    return setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (resolvedTheme === "dark") {
    const handleToLight = () => {
      setTheme("light");
    };

    return (
      <Button onClick={handleToLight}>
        <SunIcon width={32} height={32} />
      </Button>
    );
  }

  const handleToDark = () => {
    setTheme("dark");
  };

  return (
    <Button onClick={handleToDark}>
      <MoonIcon width={32} height={32} />
    </Button>
  );
};

const Button = styled("button", {
  size: "60px",
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
