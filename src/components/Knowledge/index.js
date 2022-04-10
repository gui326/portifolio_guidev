import { Container, Grid, Stack } from "@mui/material";
import Image from "next/image";

import { Title, Card, KnowArea } from "./styled";


export default function Knowledge(){
    return(
        <Container>
            <Title>Conhecimentos</Title>

            <KnowArea>
                <Card>
                    <Image src="/images/logoReact.webp" alt="Logo React" width="80" height="80"/>

                    <p class="text--show">React</p>
                    <p class="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoNext.png" alt="Logo Next.js" width="120" height="80"/>

                    <p class="text--show">Next.js</p>
                    <p class="info--show">2 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoHtml.png" alt="Logo HTML5" width="70" height="80"/>

                    <p class="text--show">HTML5</p>
                    <p class="info--show">2 anos</p>
                </Card>

                <Card>
                    <Image src="/images/logoCss.png" alt="Logo CSS3" width="80" height="80"/>

                    <p class="text--show">CSS3</p>
                    <p class="info--show">2 anos</p>
                </Card>

                <Card>
                    <Image src="/images/logoJavascript.png" alt="Logo JavaScript" width="80" height="80"/>

                    <p class="text--show">JavaScript</p>
                    <p class="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoPhp.png" alt="Logo PHP" width="120" height="80"/>

                    <p class="text--show">PHP</p>
                    <p class="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoLaravel.png" alt="Logo Laravel" width="80" height="80"/>

                    <p class="text--show">Laravel</p>
                    <p class="info--show">3 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoMui.png" alt="Logo Material UI" width="90" height="80"/>

                    <p class="text--show">Material UI</p>
                    <p class="info--show">3 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoBootstrap.png" alt="Logo Bootstrap" width="100" height="80"/>

                    <p class="text--show">Bootstrap</p>
                    <p class="info--show">2 anos</p>
                </Card>
            </KnowArea>

            <Title style={{ marginTop: 120 }}>Noções Básicas / Conhecimentos Adicionais</Title>

            <KnowArea spacing={2} direction="row">
                <Card>
                    <Image src="/images/logoJava.png" alt="Logo java" width="80" height="80"/>

                    <p class="text--show">Java</p>
                    <p class="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoPython.png" alt="Logo Python" width="80" height="80"/>

                    <p class="text--show">Python</p>
                    <p class="info--show">4 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoFigma.svg" alt="Logo Figma" width="70" height="80"/>

                    <p class="text--show">Figma</p>
                    <p class="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoGit.png" alt="Logo Git" width="80" height="80"/>

                    <p class="text--show">Git</p>
                    <p class="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoCsharp.webp" alt="Logo C#" width="80" height="80"/>

                    <p class="text--show">C#</p>
                    <p class="info--show">1 mês</p>
                </Card>
            </KnowArea>
        </Container>
    )
}