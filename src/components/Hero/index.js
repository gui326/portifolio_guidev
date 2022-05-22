import { Container, Grid } from "@mui/material";
import Image from "next/image";

import { Info, Name, Description, BackgroundImage } from "./styled";


export default function Hero(){
    return(
        <Container style={{ height: '92vh', alignSelf: 'center', display: 'flex' }}>
            <Grid container spacing={6} overflow="hidden" position="relative">
                <Grid item md={6} xs={10} alignSelf="center">
                    <Info>Olá, eu sou o</Info>
                    <Name>Guilherme Batista</Name>
                    <Description>
                        Estou no mundo da programação a quase 4 anos, formando em ADS e atuando profissionalmente a 1 ano e meio como
                        <span> Software Developer Front-end</span>, utilizando HTML5, CSS3, JavaScript, PHP, React, React Native, Next.js e entre outras tecnologias. 
                    </Description>
                </Grid>
                <Grid item md={6} xs={2} alignSelf="center" textAlign="end">
                    <BackgroundImage>
                        <Image src="/images/backgroundHome.png" alt="Desenho" width="500" height="500"/>
                    </BackgroundImage>
                </Grid>
            </Grid>
        </Container>
    )
}