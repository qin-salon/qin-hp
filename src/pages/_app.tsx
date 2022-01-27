import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { withTheme } from "src/component/Theme";

const App: CustomAppPage = (props) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>Qin</title>
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default memo(withTheme(App));
