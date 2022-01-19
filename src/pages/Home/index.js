import Hero from "../../components/Hero";
import { CardAreaAdicionais, RightSide, LeftSide, CardAdicional, ImagemAleatoria, StarArea, CardExp, CardAreaExp, Logo, Section, Heading, IconJourney, HeadingText, HeadingIcon, ContentArea, Title} from "./styled";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function Home(){
    return(
        <div>
            <Hero/>
            <Section id="sectionJourney">
                <Heading>
                    <HeadingIcon>
                        <IconJourney/>
                    </HeadingIcon>
                    <HeadingText>
                        Journey
                    </HeadingText>
                </Heading>

                <ContentArea>
                    <Title>
                        Possuo <span>experiência</span> profissional nas seguintes tecnologias
                    </Title>

                    <CardAreaExp>
                        <CardExp>
                            <Logo src="phpLogo.png"/>
                            <p>PHP - 2 Anos</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="javascriptLogo.png"/>
                            <p>Javascript - 1 Ano</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="htmlLogo.png"/>
                            <p>HTML5 - 2 Anos</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="cssLogo.png"/>
                            <p>CSS3 - 2 Anos</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>
                        
                    </CardAreaExp>

                    <CardAreaExp>
                        <CardExp>
                            <Logo src="codeigniterLogo.png"/>
                            <p>CodeIgniter - 1 Ano</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="laravelLogo.png"/>
                            <p>Laravel - 4 Meses</p>
                            <StarArea>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="figmaLogo.svg"/>
                            <p>Figma - 4 Meses</p>
                            <StarArea>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="bootstrapLogo.png"/>
                            <p>Bootstrap - 2 Anos</p>
                            <StarArea>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>
                        
                    </CardAreaExp>

                    <ImagemAleatoria src="backgroundJourney.svg"/>

                    <Title>
                        E tenho <span>conhecimento</span> em
                    </Title>

                    <CardAreaExp>
                        <CardExp>
                            <Logo src="javaLogo.png"/>
                            <p>Java - 1 Ano</p>
                            <StarArea>
                                <StarIcon/>
                                <StarHalfIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="pythonLogo.png"/>
                            <p>Python - 4 Meses</p>
                            <StarArea>
                                <StarIcon/>
                            </StarArea>
                        </CardExp>

                        <CardExp>
                            <Logo src="csharpLogo.png"/>
                            <p>C# - 1 Mês</p>
                            <StarArea>
                                <StarHalfIcon/>
                            </StarArea>
                        </CardExp>
                        
                    </CardAreaExp>

                    <Title>
                        <u>E estou apreendendo <span>React</span></u>
                    </Title>

                    <CardAreaAdicionais>
                        <CardAdicional>
                            <LeftSide>
                                <h4>Nível de <span>Inglês</span></h4>
                            </LeftSide>
                            <RightSide>
                                <h6>Escrita</h6>
                                <p>Básico</p>
                                <h6>Leitura</h6>
                                <p>Intermediário</p>
                                <h6>Fala</h6>
                                <p>Básico</p>
                            </RightSide>
                        </CardAdicional>

                        <CardAdicional>
                            <LeftSide>
                                <h4>Conhecimentos <span>Adicionais</span></h4>
                            </LeftSide>

                            <RightSide>
                                <ul>
                                    <li>SEO</li>
                                    <li>Selenium Python</li>
                                </ul>
                            </RightSide>
                        </CardAdicional>
                    </CardAreaAdicionais>
                </ContentArea>
            </Section>
        </div>
    );
}