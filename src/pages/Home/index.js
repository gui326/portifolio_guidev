import Hero from "../../components/Hero";
import {Section, Heading, IconJourney, HeadingText, HeadingIcon} from "./styled";

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
            </Section>
        </div>
    );
}