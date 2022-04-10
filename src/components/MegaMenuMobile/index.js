import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { Area, Item } from "./styled";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function MegaMenuMobile(props) {
    const router = useRouter();
    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
        <Dialog
            fullScreen
            open={props.open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
                <Area>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                    </div>
                    <Link href="/" passHref>
                        <a>
                            <Item ativo={router.pathname === "/" ? true : false}>Home</Item>
                        </a>
                    </Link>
                    <Link href="/projetos" passHref>
                        <a>
                            <Item ativo={router.pathname === "/projetos" ? true : false}>Projetos</Item>
                        </a>
                    </Link>
                </Area>

        </Dialog>
        </div>
    );
}