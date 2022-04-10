import Head from 'next/head'
import HomeScreen from '../src/screens/HomeScreen'

export default function Home() {
  return (
    <>
      <Head>
        <title>GuiDev - Portifólio de um desenvolvedor</title>
        <meta name="description" content="GuiDev - Portifólio de um desenvolvedor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />

    </>
  )
}
