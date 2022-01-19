import { useState } from 'react';
import { MenuMobile, Principal, MenuArea, MenuButton, MenuItem, HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 
import {Link} from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { elementAcceptingRef } from '@mui/utils';

export default function Header(){
    const [menu, setMenu] = useState(false);

    function handleMenu(){
        if(menu){
            document.body.style = "";
            setMenu(false);
        } else {
            document.body.style.overflowY = "hidden";
            setMenu(true);
        }
    }

    return(
        <HeaderArea>
            <Principal>
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
                    <Link to="/contact">
                        <HeaderItem>
                            Contact
                        </HeaderItem>
                    </Link>
                </HeaderBar>
                <HeaderMobile>
                    <MenuIcon onClick={() => handleMenu()}/>
                </HeaderMobile>

                
            </Principal>

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
                        <Link to="/contact">
                            <MenuItem onClick={() => handleMenu()}>Contact</MenuItem>
                        </Link>
                    </MenuArea>
                </MenuMobile>
            </Slide>
            
        </HeaderArea>
    );
}