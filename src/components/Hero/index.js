import { Container, Grid } from "@mui/material";
import Image from "next/image";

import { Info, Name, Description, BackgroundImage } from "./styled";


export default function Hero(){
    return(
        <Container style={{ height: '100vh', alignSelf: 'center', display: 'flex' }}>
            <Grid container spacing={6} overflow="hidden" position="relative">
                <Grid item md={6} xs={10} alignSelf="center">
                    <Info><span>Olá</span>, eu sou o</Info>
                    <Name>GUILHERME BATISTA</Name>
                    <Description>
                        Desenvolvedor front-end, com conhecimento em HTML5, CSS3, JavaScript e React. 
                        Apaixonado pelo mundo da programação.
                        E atualmente estou utilizando React, Next e React Native.
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