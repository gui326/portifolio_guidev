import { Icon, Section, LeftSide, RightSide, SubTitle, Title, SpecialText, Text, Imagem } from './style.js';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';

import './hero.css';

export default function Hero(){
    return(
        <Section>
            <LeftSide>
                <SubTitle>Olá. Sou o</SubTitle>
                <Title>Guilherme Batista da Silva</Title>
                <SpecialText>Desenvolvedor Full-Stack</SpecialText>
                <Text>Sou desenvolvedor com conhecimento sólido em php, html, css e javascript. Iniciando uma nova jornada com React.</Text>
            </LeftSide>
            <RightSide>
                <Slide direction="left" timeout={500} in={true} mountOnEnter unmountOnExit>
                <Imagem src="heroImagem.svg"/>
                </Slide>
            </RightSide>

            <a href="#sectionJourney">
                <Fab id="teste_gui" sx={{background: '#98fee1', margin: 'auto'}}  color="white" aria-label="add">
                    <Icon/>
                </Fab>
            </a>
        </Section>
    );
}