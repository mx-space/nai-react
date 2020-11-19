import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang={'zh-cn'}>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <body id={'app'} className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
