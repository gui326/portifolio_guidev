import { HeaderArea, HeaderLogoArea, HeaderLogo, HeaderItem, HeaderBar, HeaderMobile } from './style.js'; 

export default function Header(){
    return(
        <HeaderArea>
            <HeaderLogoArea>
                <HeaderLogo>GuiDev</HeaderLogo>
            </HeaderLogoArea>
            <HeaderBar>
                <HeaderItem>
                    Home
                </HeaderItem>
                <HeaderItem>
                    Journey
                </HeaderItem>
                <HeaderItem>
                    Projects
                </HeaderItem>
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