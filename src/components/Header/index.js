import { useState } from "react";
import { Container } from "@mui/material";
import Link from "next/link";

import MenuIcon from '@mui/icons-material/Menu';

import { Area, LogoArea, MenuArea, Menu, Item, MenuMobile } from "./styled";
import {useRouter} from 'next/router';
import MegaMenuMobile from "../MegaMenuMobile";


export default function Header(){
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return(
        <Area>
            <Container style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <LogoArea>
                    <Link href="/" passHref>
                        <a>
                            <h3>GuiDev</h3>
                        </a>
                    </Link>
                </LogoArea>
                <MenuArea>
                    <Menu>
                        <Link href="/" passHref>
                            <a>
                                <Item ativo={router.pathname === "/"}>Home</Item>
                            </a>
                        </Link>
                        <Link href="/projetos" passHref>
                            <a>
                                <Item ativo={router.pathname === "/projetos"}>Projetos</Item>
                            </a>
                        </Link>
                        <Link href="/contatos" passHref>
                            <a>
                                <Item ativo={router.pathname === "/contato"}>Contato</Item>
                            </a>
                        </Link>
                    </Menu>
                </MenuArea>
                <MenuMobile>
                    <MenuIcon onClick={() => setOpen(true)}/>
                </MenuMobile>
            </Container>

            <MegaMenuMobile open={open} setOpen={setOpen}/>
        </Area>
    )
}