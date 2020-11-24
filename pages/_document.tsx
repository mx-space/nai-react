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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KPGB7KY29E"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KPGB7KY29E');
`,
          }}
        ></script>
      </Html>
    )
  }
}
