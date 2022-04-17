import Head from 'next/head'
import ContactScreen from '../src/screens/ContactScreen'

export default function Project() {
  return (
    <>
      <Head>
        <title>Contato | GuiBatista</title>
        <meta name="description" content="GuiBatista - Contato" />
      </Head>

      <ContactScreen />

    </>
  )
}
