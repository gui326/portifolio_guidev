import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Title, Description } from "./styled";


export default function ContactScreen(){
    return(
        <>
            <Header />

            <Container sx={{ mt: 18 }}>
                <Title>
                    Contato
                </Title>
                <Description>
                    entre em <span>contato</span> para a gente trocar uma ideia
                </Description>
            </Container>

            <Footer />
        </>
    )
}