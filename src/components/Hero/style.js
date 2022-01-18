import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Icon = styled(KeyboardArrowDownIcon)`
    font-size: 30px!important;
`;

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 2rem;
    max-width: 1240px;
    margin: auto;

    @media (max-width: 468px){
        padding: 5% 1rem;
        overflow: hidden;
        position: relative;
    }
`;

export const LeftSide = styled.div`
    padding-top: 4rem;
    width: 50%;

    @media(max-width: 468px){
        width: 95%;
    }
`;

export const RightSide = styled.div`
    padding-top: 3%;
    display: flex;
    align-self: center;
    width: 50%;

    @media (max-width: 468px){
        width: 5%;
    }
`;

export const SubTitle = styled.h6`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 1px;
`;

export const Title = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 70%;
    font-size: 35px;
    font-weight: 700;
`;

export const SpecialText = styled.h6`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #80FFDB;
    font-size: 16px;
    letter-spacing: 5%;
    font-weight: 700;
`;

export const Text = styled.p`
    font-weight: 400;
    width: 80%;
    font-size: 16px;
    color: #A7A7A7;
`;

export const Imagem = styled.img`
    margin: auto;
    max-width: 82%;

    @media (max-width: 468px){
        position: absolute;
        width: 100%;
        top: 5em;
        left: 16em;
        z-index: 0;
    }
`;

