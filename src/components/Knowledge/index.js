import { Container, Grow } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


import { Title, Card, KnowArea, Description, SubTitle } from "./styled";


export default function Knowledge(){
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.2,
    });
    

    return(
        <Container>
            <Title>Conhecimentos</Title>
            <Description>Possuo experiência <span>profissional</span> nas seguintes tecnologias/linguagens</Description>

            <KnowArea
            ref={ref}
            >
                <Grow in={inView}
                {...(inView ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoReact.webp" alt="Logo React" width="60" height="60"/>

                        <p className="text--show">React</p>
                        <p className="info--show">8 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 1000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoNext.png" alt="Logo Next.js" width="90" height="60"/>

                        <p className="text--show">Next.js</p>
                        <p className="info--show">3 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoHtml.png" alt="Logo HTML5" width="50" height="60"/>

                        <p className="text--show">HTML5</p>
                        <p className="info--show">2 anos</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 1000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoCss.png" alt="Logo CSS3" width="60" height="60"/>

                        <p className="text--show">CSS3</p>
                        <p className="info--show">2 anos</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoJavascript.png" alt="Logo JavaScript" width="60" height="60"/>

                        <p className="text--show">JavaScript</p>
                        <p className="info--show">1,5 ano</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 2500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoPhp.png" alt="Logo PHP" width="90" height="60"/>

                        <p className="text--show">PHP</p>
                        <p className="info--show">1 ano</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 2000 } : {})}
                >
                    <Card>
                        <Image src="/images/nodejs.png" alt="Logo Node.js" width="60" height="60"/>

                        <p className="text--show">Node.js</p>
                        <p className="info--show">2 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoLaravel.png" alt="Logo Laravel" width="60" height="60"/>

                        <p className="text--show">Laravel</p>
                        <p className="info--show">3 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 2000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoMui.png" alt="Logo Material UI" width="70" height="60"/>

                        <p className="text--show">Material UI</p>
                        <p className="info--show">6 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView}
                {...(inView ? { timeout: 2500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoBootstrap.png" alt="Logo Bootstrap" width="80" height="60"/>

                        <p className="text--show">Bootstrap</p>
                        <p className="info--show">2 anos</p>
                    </Card>
                </Grow>
            </KnowArea>

            <SubTitle style={{ marginTop: 120 }}>Noções Básicas / Conhecimentos Adicionais</SubTitle>

            <KnowArea 
            ref={ref2}
            spacing={2} direction="row">
                <Grow in={inView2}
                {...(inView2 ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoJava.png" alt="Logo java" width="60" height="60"/>

                        <p className="text--show">Java</p>
                        <p className="info--show">1 ano</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 1000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoPython.png" alt="Logo Python" width="60" height="60"/>

                        <p className="text--show">Python</p>
                        <p className="info--show">4 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoFigma.svg" alt="Logo Figma" width="50" height="60"/>

                        <p className="text--show">Figma</p>
                        <p className="info--show">8 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 1000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoGit.png" alt="Logo Git" width="60" height="60"/>

                        <p className="text--show">Git</p>
                        <p className="info--show">8 meses</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoCsharp.webp" alt="Logo C#" width="60" height="60"/>

                        <p className="text--show">C#</p>
                        <p className="info--show">1 mês</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 2000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoCodeigniter.png" alt="Logo Code Igniter" width="60" height="60"/>

                        <p className="text--show">Code Igniter</p>
                        <p className="info--show">1 ano</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 1500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoGraphql.png" alt="Logo GraphQL" width="60" height="60"/>

                        <p className="text--show">GraphQL</p>
                        <p className="info--show">1 mês</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 1000 } : {})}
                >
                    <Card>
                        <Image src="/images/logoMysql.png" alt="Logo Mysql" width="70" height="60"/>

                        <p className="text--show">MySql</p>
                        <p className="info--show">1,5 ano</p>
                    </Card>
                </Grow>

                <Grow in={inView2}
                {...(inView2 ? { timeout: 500 } : {})}
                >
                    <Card>
                        <Image src="/images/logoFirebase.png" alt="Logo Firebase" width="60" height="60"/>

                        <p className="text--show">Firebase</p>
                        <p className="info--show">1 mês</p>
                    </Card>
                </Grow>
            </KnowArea>
        </Container>
    )
}