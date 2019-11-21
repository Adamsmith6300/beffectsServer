import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-us">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <div className="w-full flex-1 h-screen content-center text-center">
              <h1 className="mt-10 title-message">JavaScript is Required.</h1>
              <h3 className="mt-2 subtitle-message">
                Enable JavaScript in your browser and try again.
              </h3>
            </div>
          </noscript>

          <script
            src="https://preview.babylonjs.com/babylon.max.js"
            type="text/javascript"
          ></script>
          <script src="../static/lib/effects.js"></script>
          <script src="../static/lib/example.js"></script>
        </body>
      </html>
    );
  }
}
