import { Container, Grid, Grow } from "@mui/material";
import Image from "next/image";

import { Name, Description, BackgroundImage } from "./styled";


export default function Hero(){
    return(
        <Container style={{ height: '95vh', alignSelf: 'center', display: 'flex' }}>
            <Grow in={true}
            {...(true ? { timeout: 200 } : {})}
            >
                <Grid container spacing={6} overflow="hidden" position="relative">
                    <Grid item md={6} xs={10} alignSelf="center">
                        <Description>Olá, eu sou o</Description>
                        <Name>Guilherme Batista</Name>
                        <Description>
                            e estudo programação a quase 4 anos, estou formando em ADS e atuando profissionalmente a 1 ano e meio como
                            <span> Software Developer Full-Stack</span>, utilizando HTML5, CSS3, JavaScript, PHP, Node.js, MYSQL, React, React Native, Next.js e entre outras tecnologias. 
                        </Description>
                    </Grid>
                    <Grid item md={6} xs={2} alignSelf="center" textAlign="end">
                        <BackgroundImage>
                            <Image src="/images/backgroundHome.png" alt="Desenho" width="450" height="450"/>
                        </BackgroundImage>
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    )
}