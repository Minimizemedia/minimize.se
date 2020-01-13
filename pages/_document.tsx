import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import styled from '../utils/styled';
import theme from '../utils/theme';
import React from 'react';

const Body = styled.body`
  background-color: ${theme.colors.pale};
`;

class MyDocument extends Document {
  public static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style>{`body { margin: 0; font-family: IBM Plex Sans, sans-serif; }`}</style>
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
