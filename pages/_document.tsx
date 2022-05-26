import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Jaldi&family=Raleway:wght@100;200;300;900&family=Roboto:ital,wght@0,100;0,400;0,500;0,900;1,100&family=Rubik&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument