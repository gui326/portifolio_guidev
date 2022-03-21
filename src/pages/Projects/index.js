import { Section, IconArrow, Heading, ProjectArea, ContentArea, Title, Text, LogoArea, Logo, LinkArea, LinkA, Imagem, ImagemArea} from './styled';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';


export default function Projects(){
    return(
        <Section>
            <Heading>
                <img width="37" src="iconInsight.svg"/>
                <h3>Projects</h3>
            </Heading>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <ProjectArea>
                        <ContentArea>
                            <Title>NewFisco</Title>
                            <Text>
                                Sistema web para gerenciamento de notas fiscais e geração do arquivo Sintegra.
                                <br/>
                                O sistema faz a leitura do arquivo nota fiscal no formato xml e faz a geração do arquivo Sintegra apartir
                                da coleta desses dados.
                            </Text>
                            <LogoArea>
                                <Logo alt="laravel logo" title="Laravel" src="laravelLogo.png"/>
                                <Logo alt="Php Logo" title="PHP" src="phpLogo.png"/>
                                <Logo alt="HTML5 Logo" title="HTML5" src="htmlLogo.png"/>
                                <Logo alt="CSS3 Logo" title="CSS3" src="cssLogo.png"/>
                            </LogoArea>
                            <LinkArea>
                                <LinkA href={'https://newfisco.vercel.app/'} target={'_blank'}>
                                    <IconArrow/>
                                    Visualizar
                                </LinkA>
                            </LinkArea>
                        </ContentArea>
                        <ImagemArea>
                            <a href="https://newfisco.vercel.app/" target="_blank">
                                <Imagem src="project1.png"/>
                            </a>
                        </ImagemArea>
                    </ProjectArea>
                </Grid>
            </Grid>
            <Grid pt={1} container spacing={1}>
                <Grid item md={4} xs={12}>
                    <ProjectArea>
                        <Title>Formulário Pacote de Adesivo</Title>
                        <Text>
                            Formulário para compra de pacote de adesivos.
                            Com um checkout simples de pagamento.
                        </Text>
                        <LogoArea>
                            <Logo alt="React Logo" title="React" src="reactLogo.png"/>
                        </LogoArea>
                        <LinkArea>
                            <LinkA href={'https://teste-form-rho.vercel.app/'} target={'_blank'}>
                                <IconArrow/>
                                Visualizar
                            </LinkA>
                        </LinkArea>
                    </ProjectArea>
                </Grid>
                <Grid item md={4} xs={12}>
                    <ProjectArea>
                        <Title>Teacher Ana</Title>
                        <Text>
                            Plataforma Web feita com React e o back-end está sendo utilizado FireBase.
                        </Text>
                        <LogoArea>
                            <Logo alt="React Logo" title="React" src="reactLogo.png"/>
                            <Logo alt="Firebase Logo" title="Firebase" src="firebaseLogo.png"/>
                        </LogoArea>
                        <LinkArea>
                            <LinkA href={'https://teacher-ana.vercel.app/'} target={'_blank'}>
                                <IconArrow/>
                                Visualizar
                            </LinkA>
                        </LinkArea>

                    </ProjectArea>
                </Grid>
                <Grid item md={4} xs={12}>
                    <ProjectArea>
                        <Title>InvesteJá</Title>
                        <Text>
                            Plataforma Web sobre investimentos feito com React.
                        </Text>
                        <LogoArea>
                            <Logo title="React Logo" title="React" src="reactLogo.png"/>
                        </LogoArea>
                        <LinkArea>
                            <LinkA href={'https://investeja.vercel.app/'} target={'_blank'}>
                                <IconArrow/>
                                Visualizar
                            </LinkA>
                        </LinkArea>

                    </ProjectArea>
                </Grid>
            </Grid>
        </Section>
    );
}