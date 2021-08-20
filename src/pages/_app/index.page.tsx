import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { memo } from "react";
import { dark } from "src/style/theme";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <ThemeProvider attribute="class" value={{ dark }}>
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </ThemeProvider>
  );
};

export default memo(App);
