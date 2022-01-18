import {Section, ContentArea, LeftSide, RightSide, Title, ContatoArea, IconArea, ImagemArea, TextArea, Text, Imagem} from "./styled";
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
                            Contato
                        </Title>
                        <a target="_blank" href="mailto:guilherme.326@hotmail.com">
                            <ContatoArea>
                                <IconArea>
                                    <EmailIcon/>
                                </IconArea>
                                <TextArea>
                                    <Text>
                                        guilherme.326@hotmail.com
                                    </Text>
                                </TextArea>
                            </ContatoArea>
                        </a>

                        <a target="_blank" href="https://github.com/gui326">
                            <ContatoArea>
                                <IconArea>
                                    <GitHubIcon/>
                                </IconArea>
                                <TextArea>
                                    <Text>
                                        https://github.com/gui326
                                    </Text>
                                </TextArea>
                            </ContatoArea>
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/in/guilherme-batista-b38400197/">
                            <ContatoArea>
                                <IconArea>
                                    <LinkedInIcon/>
                                </IconArea>
                                <TextArea>
                                    <Text>
                                    https://www.linkedin.com/in/guilherme-batista-b38400197/
                                    </Text>
                                </TextArea>
                            </ContatoArea>
                        </a>
                    </TextArea>
                </RightSide>
            </ContentArea>
        </Section>
    );
}