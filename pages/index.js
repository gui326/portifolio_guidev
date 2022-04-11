import Head from 'next/head'
import HomeScreen from '../src/screens/HomeScreen'
import Script from 'next/script';

export default function Home() {
  return (
    <>
        <Script id="scriptTag1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-T7BGK77Z39`} />
        <Script id="scriptTag2" strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-T7BGK77Z39');
            `}
        </Script>

      <Head>
        <title>GuiDev - Portifólio de um desenvolvedor</title>
        <meta name="description" content="GuiDev - Portifólio de um desenvolvedor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />

    </>
  )
}
