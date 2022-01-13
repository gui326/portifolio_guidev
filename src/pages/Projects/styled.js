import styled from "styled-components";

export const Section = styled.section`
    padding: 2% 10%;
    max-width: 1240px;
    margin: auto;
`;

export const Heading = styled.div`
    padding-top: 1%;
    padding-bottom: 2%;
    width: 100%;
    color: #7C7C7C;
`;

export const Imagem = styled.img`
    width: auto;
    max-height: 230px;
    filter: grayscale(1);
    transition: all ease .6s;

    :hover{
        filter: none;
    }
`;

export const ProjectArea = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid grey;
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
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 3%;
    color: #80FFDB;
    font-weight: 700;
    width: 100%;
`;

export const Text = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: #A7A7A7;
    width: 100%;
`;

export const LogoArea = styled.div`
    justify-content: space-between;
    padding-top: 5%;
    margin: 3% 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Logo = styled.img`
    width: auto;
    max-height: 28px;
`;

export const LinkArea = styled.div`
    text-align: center;
    width: 100%;
`;

export const LinkA = styled.a`
    color: white;
    font-size: 14px;
`;

export const ImagemArea = styled.div`
    width: 60%;
    text-align: right;
    display: block;
    margin: auto;
`;


