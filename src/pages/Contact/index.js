import {Section, ContentArea, LeftSide, TextAreaIcon, RightSide, Title, ContatoArea, IconArea, ImagemArea, TextArea, Text, Imagem} from "./styled";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact(){
    return(
        <Section>
            <ContentArea>
                <LeftSide>
                    <ImagemArea>
                        <Imagem src="contactImagem.svg"/>
                    </ImagemArea>
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