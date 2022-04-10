import Head from 'next/head'
import ProjectScreen from '../src/screens/ProjectScreen'

export default function Project() {
  return (
    <>
      <Head>
        <title>GuiDev - Projetos</title>
        <meta name="description" content="GuiDev - Projetos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectScreen />

    </>
  )
}
