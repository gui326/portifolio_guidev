import { Container } from "@mui/material";
import Image from "next/image";

import { Title, Card, KnowArea, Description, SubTitle } from "./styled";


export default function Knowledge(){
    return(
        <Container>
            <Title>Conhecimentos</Title>
            <Description>Possuo experiência <span>profissional</span> nas seguintes tecnologias/linguagens</Description>

            <KnowArea>
                <Card>
                    <Image src="/images/logoReact.webp" alt="Logo React" width="80" height="80"/>

                    <p className="text--show">React</p>
                    <p className="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoNext.png" alt="Logo Next.js" width="110" height="80"/>

                    <p className="text--show">Next.js</p>
                    <p className="info--show">2 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoHtml.png" alt="Logo HTML5" width="70" height="80"/>

                    <p className="text--show">HTML5</p>
                    <p className="info--show">2 anos</p>
                </Card>

                <Card>
                    <Image src="/images/logoCss.png" alt="Logo CSS3" width="80" height="80"/>

                    <p className="text--show">CSS3</p>
                    <p className="info--show">2 anos</p>
                </Card>

                <Card>
                    <Image src="/images/logoJavascript.png" alt="Logo JavaScript" width="80" height="80"/>

                    <p className="text--show">JavaScript</p>
                    <p className="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoPhp.png" alt="Logo PHP" width="120" height="80"/>

                    <p className="text--show">PHP</p>
                    <p className="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoLaravel.png" alt="Logo Laravel" width="80" height="80"/>

                    <p className="text--show">Laravel</p>
                    <p className="info--show">3 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoMui.png" alt="Logo Material UI" width="90" height="80"/>

                    <p className="text--show">Material UI</p>
                    <p className="info--show">3 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoBootstrap.png" alt="Logo Bootstrap" width="100" height="80"/>

                    <p className="text--show">Bootstrap</p>
                    <p className="info--show">2 anos</p>
                </Card>
            </KnowArea>

            <SubTitle style={{ marginTop: 120 }}>Noções Básicas / Conhecimentos Adicionais</SubTitle>

            <KnowArea spacing={2} direction="row">
                <Card>
                    <Image src="/images/logoJava.png" alt="Logo java" width="80" height="80"/>

                    <p className="text--show">Java</p>
                    <p className="info--show">1 ano</p>
                </Card>

                <Card>
                    <Image src="/images/logoPython.png" alt="Logo Python" width="80" height="80"/>

                    <p className="text--show">Python</p>
                    <p className="info--show">4 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoFigma.svg" alt="Logo Figma" width="70" height="80"/>

                    <p className="text--show">Figma</p>
                    <p className="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoGit.png" alt="Logo Git" width="80" height="80"/>

                    <p className="text--show">Git</p>
                    <p className="info--show">6 meses</p>
                </Card>

                <Card>
                    <Image src="/images/logoCsharp.webp" alt="Logo C#" width="80" height="80"/>

                    <p className="text--show">C#</p>
                    <p className="info--show">1 mês</p>
                </Card>
            </KnowArea>
        </Container>
    )
}