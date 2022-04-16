import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

import { Title, Description, Card } from "./styled";


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

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link href="mailto:guilherme.326@hotmail.com" passHref>
                        <a target="_blank">
                            <Card>
                                <EmailIcon />
                                <p>guilherme.326@hotmail.com</p>
                            </Card>
                        </a>
                    </Link>

                    <Link href="https://www.linkedin.com/in/guilherme-batista-b38400197/" passHref>
                        <a target="_blank">
                            <Card>
                                <LinkedInIcon />
                                <p>Acessar LinkedIn</p>
                            </Card>
                        </a>
                    </Link>

                    <Link href="https://github.com/gui326" passHref>
                        <a target="_blank">
                            <Card>
                                <GitHubIcon />
                                <p>Acessar Github</p>
                            </Card>
                        </a>
                    </Link>
                </div>
            </Container>

            <Footer />
        </>
    )
}