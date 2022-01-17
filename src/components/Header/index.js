import { useState } from 'react';
import { MenuMobile, MenuArea, MenuButton, MenuItem, HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 
import {Link} from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

export default function Header(){
    const [menu, setMenu] = useState(false);

    function handleMenu(){
        menu ? setMenu(false) : setMenu(true);
    }

    return(
        <header>
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
                    <MenuIcon onClick={() => handleMenu()}/>
                </HeaderMobile>

                
            </HeaderArea>

            <Slide direction="left" timeout={500} in={menu} mountOnEnter unmountOnExit>
                <MenuMobile>
                    <MenuButton>
                        <CloseIcon onClick={() => handleMenu()}/>
                    </MenuButton>
                    <MenuArea>
                        <Link to="/">
                            <MenuItem onClick={() => handleMenu()}>Home</MenuItem>
                        </Link>
                        <Link to="/projects">
                            <MenuItem onClick={() => handleMenu()}>Projects</MenuItem>
                        </Link>
                        <MenuItem>
                            Contact
                        </MenuItem>
                    </MenuArea>
                </MenuMobile>
            </Slide>
            
        </header>
    );
}