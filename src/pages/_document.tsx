import Document, { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "src/style";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
