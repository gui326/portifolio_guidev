import { HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 
import {Link} from 'react-router-dom'; 

export default function Header(){
    return(
        <HeaderArea>
            <HeaderLogoArea>
                <Link to="/">
                    <HeaderLogo>GuiDev</HeaderLogo>
                </Link>
            </HeaderLogoArea>
            <HeaderBar>
                <Link to="/">
                    <HeaderItem>Home</HeaderItem>
                </Link>
                <Link to="/projects">
                    <HeaderItem>Projects</HeaderItem>
                </Link>
                <HeaderItem>
                    Contact
                </HeaderItem>
            </HeaderBar>
            <HeaderMobile>
                Teste
            </HeaderMobile>
        </HeaderArea>
    );
}