import { IdProvider } from "@radix-ui/react-id";
import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { withTheme } from "src/component/Theme";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <IdProvider>
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </IdProvider>
  );
};

export default memo(withTheme(App));
