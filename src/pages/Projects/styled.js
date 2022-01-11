import styled from "styled-components";

export const Section = styled.section`
    padding: 2% 10%;
    max-width: 1240px;
    margin: auto;
`;

export const Heading = styled.div`
    padding-top: 2%;
    padding-bottom: 2%;
    width: 100%;
    color: #7C7C7C;
`;

export const ProjectArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const ContentArea = styled.div`
    width: 50%;
    flex: 0 0 auto;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 2%;
    color: #80FFDB;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: #A7A7A7;
`;

export const LogoArea = styled.div`
    justify-content: space-between;
    margin: 3% auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 85%;
`;

export const Logo = styled.img`
    width: auto;
    max-height: 40px;
`;

export const LinkArea = styled.a`
    text-align: center;
    width: 100%;
    color: white;
`;

export const ImagemArea = styled.div`
    display: block;
    margin: auto;
`;

export const Imagem = styled.img`
    width: auto;
    max-height: 230px;
    filter: grayscale(1);
    transition: all ease .3s;

    :hover{
        filter: none;
    }
`;
