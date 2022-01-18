import styled from "styled-components";

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

export const ContentArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const LeftSide = styled.div`
    width: 50%;
`;

export const RightSide = styled.div`
    padding-top: 5em;
    width: 50%;
`;

export const ImagemArea = styled.div`
    width: 100%;
`;

export const Imagem = styled.img`
    width: 100%;
    max-height: 400px;
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    color: #80FFDB;
`;

export const ContatoArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    transition: all ease .2s;
    padding-top: .3em;

    :hover{
        color: #6930C3;
    }
`;

export const IconArea = styled.div`
    width: 100%;
    width: 6%;
`;

export const TextArea = styled.div`
    width: 94%;
    text-align: left;
    align-self: center;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
`;