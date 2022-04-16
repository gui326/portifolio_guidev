import Head from 'next/head'
import HomeScreen from '../src/screens/HomeScreen'


export default function Home() {
  return (
    <>
      <Head>
        <title>GuiBatista | Portifólio de um Desenvolvedor</title>
        <meta name="description" content="Desenvolvedor front-end, com conhecimento em HTML5, CSS3, JavaScript, React, React Native e Next.js. Apaixonado pelo mundo da programação." />
      </Head>

      <HomeScreen />

    </>
  )
}
