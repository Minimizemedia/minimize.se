import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style>{`body { margin: 0; font-family: IBM Plex Sans, sans-serif; }`}</style>
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
