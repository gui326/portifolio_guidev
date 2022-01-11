import { Section, Heading, ProjectArea, ContentArea, Title, Text, LogoArea, Logo, LinkArea, Imagem, ImagemArea} from './styled';
import Skeleton from '@mui/material/Skeleton';

export default function Projects(){
    return(
        <Section>
            <Heading>
                <img src="iconInsight.svg"/>
                Projects
            </Heading>
            <ProjectArea>
                <ContentArea>
                    <Title>NewFisco</Title>
                    <Text>Sistema web para gerenciamento de notas fiscais e geração do arquivo Sintegra</Text>
                    <LogoArea>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Logo src="laravelLogo.png"/>
                        <Logo src="phpLogo.png"/>
                        <Logo src="htmlLogo.png"/>
                        <Logo src="cssLogo.png"/>
                    </LogoArea>
                    <LinkArea>
                        <a href="https://newfisco.vercel.app/" target="_blank">
                            https://newfisco.vercel.app/
                        </a>
                    </LinkArea>
                </ContentArea>
                <ImagemArea>
                    <Imagem src="project1.png"/>
                </ImagemArea>
            </ProjectArea>

        </Section>
    );
}