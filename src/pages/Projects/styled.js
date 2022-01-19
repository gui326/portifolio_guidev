import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Section = styled.section`
    padding: 2% 2rem;
    max-width: 1240px;
    margin: auto;

    @media (max-width: 468px){
        padding: 2% 1rem;
    }
`;

export const IconArrow = styled(ArrowRightAltIcon)`
    position: relative;
    top: .3em;
`;

export const Heading = styled.div`
    padding-top: 1%;
    padding-bottom: 2%;
    width: 100%;
    color: #7C7C7C;
    display: flex;

    h3{
        align-self: center;
        padding-left: 1em;
        font-size: 18px;
        font-weight: 600;
        color: white;
        letter-spacing: 2px;
    }
`;

export const Imagem = styled.img`
    width: auto;
    max-height: 230px;
    filter: grayscale(1);
    transition: all ease .6s;
    margin-left: auto;

    :hover{
        filter: none;
    }

    @media (max-width: 468px){
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 3%;
    color: #80FFDB;
    font-weight: 700;
    width: 100%;
`;

export const ProjectArea = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border: 1px solid #182521;
    border-radius: 12px;
    padding: 1.2em 1.7em;
    transition: all ease .5s;
    overflow: hidden;

    :hover{
        background: #2a2a2a;
        transform: scale(1.02);
    }

    :hover ${Imagem}{
        object-position: 0 1px;
        transform: scale(1.3);
        filter: none;
    }
`;

export const ContentArea = styled.div`
    width: 40%; 
    flex: 0 0 auto;

    @media (max-width: 468px){
        width: 100%;
    }
`;

export const Text = styled.p`
    font-size: .9rem;
    font-weight: 500;
    color: #A7A7A7;
    width: 100%;
    line-height: 1.3rem;

    @media (max-width: 468px){
        line-height: 1.7rem;
        font-size: 1rem;
        text-align: justify;
        margin: 1em 0;
    }
`;

export const LogoArea = styled.div`
    justify-content: center;
    padding-top: 1em;
    padding-bottom: .2em;
    margin: 3% 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Logo = styled.img`
    width: auto;
    max-height: 28px;
    margin: 0 .7em;
`;

export const LinkArea = styled.div`
    text-align: center;
    width: 100%;

    @media (max-width: 468px){
        margin-top: 1em;
        margin-bottom: 2em;
    }
`;

export const LinkA = styled.a`
    color: white;
    font-size: 14px;
    display: inline;

    :hover{
        color: #6930C3;
    }
`;

export const ImagemArea = styled.div`
    width: 60%;
    text-align: right;
    display: block;
    margin: auto;

    @media (max-width: 468px){
        width: 100%;
    }
`;


