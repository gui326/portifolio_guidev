import { HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 
import {Link} from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';

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
                <MenuIcon/>
            </HeaderMobile>
        </HeaderArea>
    );
}