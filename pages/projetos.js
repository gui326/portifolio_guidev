import Head from 'next/head'
import ProjectScreen from '../src/screens/ProjectScreen'

export default function Project() {
  return (
    <>
      <Head>
        <title>GuiBatista | Projetos</title>
        <meta name="description" content="GuiDev - Projetos" />
      </Head>

      <ProjectScreen />

    </>
  )
}
