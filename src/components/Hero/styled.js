import styled from "styled-components";

export const Info = styled.p` 
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
`;

export const Name = styled.h2` 
    margin: 0;
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 82px;
    line-height: 1.3em;
    background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 468px){
        font-size: 52px;
    }
`;

export const Description = styled.p` 
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: #444444;
    max-width: 85%;

`;

export const BackgroundImage = styled.div` 
    opacity: .88;

    @media (max-width: 468px){
        > span{
            width: 400px!important;
            opacity: .3!important;
            top: 17em;
            left: 11em;
            right: 0;
            position: absolute!important;
        }
    }
`;