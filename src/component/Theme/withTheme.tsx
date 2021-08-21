import type { CustomAppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { dark } from "src/style/theme";

type AppPage = (props: CustomAppProps) => JSX.Element;

/**
 * @package
 */
export const withTheme = (Component: AppPage) => {
  const WithTheme = (props: CustomAppProps) => {
    useEffect(() => {
      const theme = localStorage.getItem("theme");
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute("class", theme ?? "");
    }, []);

    return (
      <ThemeProvider attribute="class" value={{ light: "light", dark }}>
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithTheme;
};
