import styled from "styled-components";
import SchoolIcon from '@mui/icons-material/School';
import { flexbox } from "@mui/system";

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 2rem;
    max-width: 1240px;
    margin: auto;

    @media (max-width: 468px){
        margin-top: 7em;
        padding: 5% 1rem;
        overflow: hidden;
        position: relative;
    }
`;

export const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const HeadingIcon = styled.div`
    align-self: center;
    font-size: 40px;

    @media (max-width: 468px){
        font-size: 50px!important;
    }
`;

export const HeadingText = styled.h5`
    align-self: center;
    font-size: 18px;
    letter-spacing: 2px;
    padding-left: .7em;

    @media (max-width: 468px){
        font-size: 1.5rem;
        margin: 0;
    }
`;

export const IconJourney = styled(SchoolIcon)`
    color: #80FFDB;
    font-size: 40px!important;

    @media (max-width: 468px){
        font-size: 3rem!important;
    }
`;

export const ContentArea = styled.div`
    text-align: center;
    width: 100%;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;

    :last-of-type{
        margin-top: 2.4em;
    }

    span{
        color: #80FFDB;
        font-weight: 500;
    }
`;

export const StarArea = styled.div`
    padding: .7em 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    transition: all ease 1s;

    svg{
        margin: auto;
        color: #80FFDB;
    }
`;

export const CardExp = styled.div`
    border-radius: 15px;
    border: 1px solid #80ffdb1a;
    padding: 1.7rem 1.5rem 1rem 1.5rem;
    margin: 1.5rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    min-width: 130px;
    transition: all ease 1s;
    z-index: 1;
    position: relative;

    p{
        position: relative;
        padding: 0.7em 0;
        display: none;
        transition: all ease 1s;
        font-size: .8rem;
    }

    :hover, :active, :focus, :visited, :target{
        transform: scale(1.1);
        background: #356154;
        border: transparent;
    }

    :hover p{
        display: block;
    }

    :hover ${StarArea}{
        display: none;
    }

    @media (max-width: 468px){
        padding: 2rem 1.1rem;
        min-width: 36%;
        margin: 0.3em;
    }
`;

export const Logo = styled.img`
    max-height: 65px;

    @media (max-width: 468px){
        max-width: 110px;
    }
`;



export const CardAreaExp = styled.div`
    display: inline-flex;

    @media (max-width: 468px){
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ImagemAleatoria = styled.img`
    position: absolute;
    right: -1em;
    margin-top: -5em;
    filter: brightness(0.4);
    z-index: 0;

    @media (max-width: 468px){
        filter: brightness(0.5);
    }
`;

export const CardAreaAdicionais = styled.div`
    padding-top: 2.5em;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const CardAdicional = styled.div`
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border: 1px solid #182521;
    border-radius: 50px;
    display: flex;
    width: 47%;
    margin: 1%;
    box-sizing: border-box;
    padding: 0 2em;

    span{
        color: #80FFDB;
    }

    h4{
        font-size: 1.5rem;
        margin: 0;
    }

    h6{
        font-size: 1rem;
        
        margin: 0;
    }

    p{
        margin: 0;
        padding-bottom: .7em;
        color: #80FFDB;
    }

    ul{
        padding-left: 1em;
    }

    li{
        list-style: circle;
    }

    @media (max-width: 468px){
        margin-bottom: 2em;
        width: 100%;
        min-height: 200px;
        padding: 0 1em;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    margin: auto;
`;

export const RightSide = styled.div`
    margin: auto;
    width: 50%;
    padding: 1em 0;
    text-align: left;

    @media (max-width: 468px){
        padding: 1em 3em;
    }
`;