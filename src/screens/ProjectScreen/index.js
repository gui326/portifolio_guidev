import { Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GitHubIcon from '@mui/icons-material/GitHub';

import { Title, Card, StackArea, Badge, LinkArea, Description } from "./styled";


export default function ProjectScreen(){
    return(
        <>
            <Header />

            <Container sx={{ mt: 18 }}>
                <Title>
                    Projetos
                </Title>
                <Description>
                    da faculdade e <span>pessoais</span> :D
                </Description>

                <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
                    <Card>
                        <h3>InvesteJá <Badge>Completo</Badge></h3>
                        <p>
                            Plataforma Web para o projeto InvesteJá de consultoria financeira, com foco em pessoa física e Autonomos.
                        </p>

                        <StackArea>
                            <Image title="Next.js" src="/images/logoNext.png" alt="Logo Next" width="43" height="30"/>
                            <Image title="Material UI" src="/images/logoMui.png" alt="Logo Mui" width="30" height="30"/>
                        </StackArea>

                        <LinkArea>
                            <Link href="https://investeja.com.br/" passHref>
                                <a target="_blank">
                                    Visualizar
                                </a>
                            </Link>
                        </LinkArea>
                    </Card>

                    <Card>
                        <h3>NewFisco <Badge>Completo</Badge></h3>
                        
                        <p>
                            Sistema web para gerenciamento de notas fiscais e geração do arquivo Sintegra.
                            O sistema faz a leitura do arquivo nota fiscal no formato xml e faz a geração do arquivo Sintegra apartir da coleta desses dados.
                        </p>

                        <StackArea>
                            <Image title="Laravel" src="/images/logoLaravel.png" alt="Logo Laravel" width="25" height="20"/>
                            <Image title="Bootstrap" src="/images/logoBootstrap.png" alt="Logo Bootstrap" width="30" height="25"/>
                            <Image title="HTML5" src="/images/logoHtml.png" alt="Logo HTML5" width="25" height="25"/>
                            <Image title="CSS3" src="/images/logoCss.png" alt="Logo CSS3" width="25" height="25"/>
                            <Image title="Javascript" src="/images/logoJavascript.png" alt="Logo JavaScript" width="25" height="25"/>
                        </StackArea>

                        <LinkArea>
                            <Link href="https://newfisco.vercel.app/" passHref>
                                <a target="_blank">
                                    Visualizar
                                </a>
                            </Link>

                            <Link href="https://github.com/gui326/projeto_newfisco" passHref>
                                <a target="_blank">
                                    <GitHubIcon />
                                </a>
                            </Link>
                        </LinkArea>
                    </Card>
                </Stack>

                <Stack pt={2} direction={{ md: 'row', xs: 'column' }} spacing={2}>
                    <Card>
                        <h3>Formulário Pacote Adesivo <Badge>Completo</Badge></h3>
                        
                        <p>
                            Formulário para compra de pacote de adesivos. *Projeto para teste    
                        </p>

                        <StackArea>
                            <Image title="React" src="/images/logoReact.webp" alt="Logo React" width="30" height="20"/>
                            <Image title="Material UI" src="/images/logoMui.png" alt="Logo Mui" width="30" height="30"/>
                        </StackArea>

                        <LinkArea>
                            <Link href="https://teste-form-rho.vercel.app/" passHref>
                                <a target="_blank">
                                    Visualizar
                                </a>
                            </Link>

                            <Link href="https://github.com/gui326/teste_form" passHref>
                                <a target="_blank">
                                    <GitHubIcon />
                                </a>
                            </Link>
                        </LinkArea>
                    </Card>
                    <Card>
                        <h3>Teacher Ana <Badge>Incompleto</Badge></h3>
                        <p>
                            Plataforma Web feita com React e o back-end está sendo utilizado o Firebase
                        </p>
                        <StackArea>
                            <Image title="React" src="/images/logoReact.webp" alt="Logo React" width="30" height="20"/>
                            <Image title="Material UI" src="/images/logoMui.png" alt="Logo Mui" width="30" height="30"/>
                            <Image title="Firebase" src="/images/logoFirebase.png" alt="Logo Firebase" width="30" height="30"/>
                        </StackArea>

                        <LinkArea>
                            <Link href="https://teacher-ana.vercel.app/" passHref>
                                <a target="_blank">
                                    Visualizar
                                </a>
                            </Link>

                            <Link href="https://github.com/gui326/teacher_ana" passHref>
                                <a target="_blank">
                                    <GitHubIcon />
                                </a>
                            </Link>
                        </LinkArea>
                    </Card>
                    <Card>
                        <h3>Meu Serviço <Badge>Em produção</Badge></h3>
                        <p>
                            Um projeto mobile e web, com um intuito de ser um "marketplace" para serviços. Contará com um aplicativo para o cliente poder procurar o serviço que precisa naquele momento.
                        </p>

                        <StackArea>
                            <Image title="Next.js" src="/images/logoNext.png" alt="Logo Next" width="43" height="30"/>
                            <Image title="Material UI" src="/images/logoMui.png" alt="Logo Mui" width="30" height="30"/>
                        </StackArea>

                        <LinkArea>
                            <Link href="https://github.com/gui326/Projeto_Meu_Servico" passHref>
                                <a target="_blank">
                                    <GitHubIcon />
                                </a>
                            </Link>
                        </LinkArea>
                    </Card>
                </Stack>
            </Container>

            <Footer />
        </>
    )
}