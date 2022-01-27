import type { CustomAppPage } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect } from "react";
import { dark } from "src/style/theme";

/**
 * @package
 */
export const withTheme = (Component: CustomAppPage) => {
  const WithTheme: CustomAppPage = (props) => {
    return (
      <ThemeProvider attribute="class" value={{ light: "light", dark }}>
        <InitTheme>
          <Component {...props} />
        </InitTheme>
      </ThemeProvider>
    );
  };

  return WithTheme;
};

const InitTheme: VFC<{ children: JSX.Element }> = (props) => {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("class", resolvedTheme ?? "");
  }, [resolvedTheme]);

  return props.children;
};
