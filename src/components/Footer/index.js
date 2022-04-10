import { Container } from "@mui/material";
import Link from "next/link";
import { Area } from "./styled";


export default function Footer(){
    return(
        <Area>
            <Container>
                <Link href="https://github.com/gui326" passHref>
                    <a target="_blank">
                        <p>developer by @gui326</p>
                    </a>
                </Link>
            </Container>
        </Area>
    )
}