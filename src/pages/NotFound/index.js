import {Section, ErrorArea, ErrorMessage, ErrorButton, Error404} from './styled';
import {Link} from 'react-router-dom';

export default function NotFound(){
    return(
        <Section>
            <ErrorArea>
                <Error404>404</Error404>
                <ErrorMessage>Página não encontrada!</ErrorMessage>
                <Link to="/">
                    <ErrorButton>Início</ErrorButton>
                </Link>
            </ErrorArea>
        </Section>
    );
}