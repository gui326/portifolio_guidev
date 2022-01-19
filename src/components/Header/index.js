import { useState } from 'react';
import { MenuMobile, Principal, MenuArea, MenuButton, MenuItem, HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 
import {Link} from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { elementAcceptingRef } from '@mui/utils';

export default function Header(){
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState('home');

    function handleMenu(page){
        setActive(page);

        if(menu){
            document.body.style = "";
            setMenu(false);
        } else {
            document.body.style.overflowY = "hidden";
            setMenu(true);
        }

        window.scrollTo(0, 0);
    }

    function handleActive(page){
        window.scrollTo(0, 0);
        setActive(page);
    }

    return(
        <HeaderArea>
            <Principal>
                <HeaderLogoArea>
                    <Link to="/">
                        <HeaderLogo onClick={() => handleActive('home')} >GuiDev</HeaderLogo>
                    </Link>
                </HeaderLogoArea>
                <HeaderBar>
                    <Link to="/">
                        <HeaderItem onClick={() => handleActive('home')} active={active == 'home' ? '#6930C3' : 'white'}>Home</HeaderItem>
                    </Link>
                    <Link to="/projects">
                        <HeaderItem onClick={() => handleActive('projects')} active={active == 'projects' ? '#6930C3' : 'white'}>Projects</HeaderItem>
                    </Link>
                    <Link to="/contact">
                        <HeaderItem onClick={() => handleActive('contact')} active={active == 'contact' ? '#6930C3' : 'white'}>
                            Contact
                        </HeaderItem>
                    </Link>
                </HeaderBar>
                <HeaderMobile>
                    <MenuIcon onClick={() => handleMenu(active)}/>
                </HeaderMobile>

                
            </Principal>

            <Slide direction="left" timeout={500} in={menu} mountOnEnter unmountOnExit>
                <MenuMobile>
                    <MenuButton>
                        <CloseIcon onClick={() => handleMenu(active)}/>
                    </MenuButton>
                    <MenuArea>
                        <Link to="/">
                            <MenuItem active={active == 'home' ? '#6930C3' : 'white'} onClick={() => handleMenu('home')}>Home</MenuItem>
                        </Link>
                        <Link to="/projects">
                            <MenuItem active={active == 'projects' ? '#6930C3' : 'white'} onClick={() => handleMenu('projects')}>Projects</MenuItem>
                        </Link>
                        <Link to="/contact">
                            <MenuItem active={active == 'contact' ? '#6930C3' : 'white'} onClick={() => handleMenu('contact')}>Contact</MenuItem>
                        </Link>
                    </MenuArea>
                </MenuMobile>
            </Slide>
            
        </HeaderArea>
    );
}