import {Section, ContentArea, LeftSide, TextAreaIcon, RightSide, Title, ContatoArea, IconArea, ImagemArea, TextArea, Text, Imagem} from "./styled";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slide from '@mui/material/Slide';

export default function Contact(){
    return(
        <Section>
            <ContentArea>
                <LeftSide>
                    <Slide direction="right" timeout={500} in={true} mountOnEnter unmountOnExit>
                    <ImagemArea>
                        <Imagem src="contactImagem.svg"/>
                    </ImagemArea>
                    </Slide>
                </LeftSide>
                <RightSide>
                    <TextArea>
                        <Title>
                            <img width="40" src="iconContact.svg"/>
                            <h3>Contato</h3>
                        </Title>
                        <a target="_blank" href="mailto:guilherme.326@hotmail.com">
                            <ContatoArea>
                                <IconArea>
                                    <EmailIcon/>
                                </IconArea>
                                <TextAreaIcon>
                                    <Text>
                                        guilherme.326@hotmail.com
                                    </Text>
                                </TextAreaIcon>
                            </ContatoArea>
                        </a>

                        <a target="_blank" href="https://github.com/gui326">
                            <ContatoArea>
                                <IconArea>
                                    <GitHubIcon/>
                                </IconArea>
                                <TextAreaIcon>
                                    <Text>
                                        https://github.com/gui326
                                    </Text>
                                </TextAreaIcon>
                            </ContatoArea>
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/in/guilherme-batista-b38400197/">
                            <ContatoArea>
                                <IconArea>
                                    <LinkedInIcon/>
                                </IconArea>
                                <TextAreaIcon>
                                    <Text>
                                    https://www.linkedin.com/in/guilherme-batista-b38400197/
                                    </Text>
                                </TextAreaIcon>
                            </ContatoArea>
                        </a>
                    </TextArea>
                </RightSide>
            </ContentArea>
        </Section>
    );
}