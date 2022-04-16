import Head from 'next/head'
import ContactScreen from '../src/screens/ContactScreen'

export default function Project() {
  return (
    <>
      <Head>
        <title>GuiBatista | Projetos</title>
        <meta name="description" content="GuiDev - Contato" />
      </Head>

      <ContactScreen />

    </>
  )
}
