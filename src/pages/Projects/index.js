import { Section, IconArrow, Heading, ProjectArea, ContentArea, Title, Text, LogoArea, Logo, LinkArea, LinkA, Imagem, ImagemArea} from './styled';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';


export default function Projects(){
    return(
        <Section>
            <Heading>
                <img width="45" src="iconInsight.svg"/>
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
                                <Logo src="laravelLogo.png"/>
                                <Logo src="phpLogo.png"/>
                                <Logo src="htmlLogo.png"/>
                                <Logo src="cssLogo.png"/>
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
                        <Title>Vida Cotação</Title>
                        <Text>
                            Multi formulário para cotação de um seguro de vida.
                            <br/>
                            Com todo o processo:
                            <br/>
                            Captação de Lead;
                            <br/>
                            Selecionamento do valor de cotação;
                            <br/>
                            Adição de complementos;
                            <br/>
                            Preenchimentos de dados pessoais;
                            <br/>
                            Seleção de beneficiários;
                            <br/>
                            Pagamento.
                        </Text>
                        <LogoArea>
                            <Logo src="reactLogo.png"/>
                        </LogoArea>
                        <LinkArea>
                            <LinkA href={'https://new-vida-cotacao-react.vercel.app/'} target={'_blank'}>
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
                            <Logo src="reactLogo.png"/>
                            <Logo src="firebaseLogo.png"/>
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
                            <Logo src="reactLogo.png"/>
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