import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import { styled } from "src/style";

/**
 * @package
 */
export const ThemeChanger: VFC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    return setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    const handleToLight = () => {
      setTheme("light");
    };
    return (
      <Button onClick={handleToLight}>
        <AccessibleIcon label="Set to light theme">
          <SunIcon width={32} height={32} />
        </AccessibleIcon>
      </Button>
    );
  }

  const handleToDark = () => {
    setTheme("dark");
  };
  return (
    <Button onClick={handleToDark}>
      <AccessibleIcon label="Set to dark theme">
        <MoonIcon width={32} height={32} />
      </AccessibleIcon>
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
