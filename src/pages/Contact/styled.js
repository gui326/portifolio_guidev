import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 2rem;
    max-width: 1240px;
    margin: auto;
    margin-top: 6em;

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

    @media (max-width: 468px){
        order: 2;
        width: 100%;
        padding-top: 3em;
    }
`;

export const RightSide = styled.div`
    padding-top: 5em;
    width: 50%;

    @media (max-width: 468px){
        padding-top: 0;
        width: 100%;
    }
`;

export const ImagemArea = styled.div`
    width: 100%;
`;

export const Imagem = styled.img`
    width: 100%;
    max-height: 400px;

    @media (max-width: 468px){
        max-height: 250px;
    }
`;

export const Title = styled.div`
    display: flex;

    h3{
        font-size: 18px;
        color: white;
        padding-left: 1em;
        letter-spacing: 2px;
    }

    @media (max-width: 468px){
        margin-bottom: 1em;
    }
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

    @media (max-width: 468px){
        width: 12%;
    }
`;

export const TextArea = styled.div`
    width: 100%;
    text-align: left;
    align-self: center;
`;

export const TextAreaIcon = styled.div`
    width: 94%;
    text-align: left;
    align-self: center;

    @media (max-width: 468px){
        width: 87%;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
`;