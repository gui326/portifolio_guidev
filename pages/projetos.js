import Head from 'next/head'
import ProjectScreen from '../src/screens/ProjectScreen'

export default function Project() {
  return (
    <>
      <Head>
        <title>Projetos | GuiBatista</title>
        <meta name="description" content="GuiBatista - Projetos" />
      </Head>

      <ProjectScreen />

    </>
  )
}
