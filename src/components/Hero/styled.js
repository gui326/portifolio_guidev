import styled from "styled-components";

export const Name = styled.h2` 
    margin: 0;
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 82px;
    line-height: 95px;
    background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 468px){
        font-size: 52px;
        line-height: 70px;
    }
`;

export const Description = styled.p` 
    margin: 0;
    font-family: 'Inter', sans-serif;
    padding-top: .5em;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #444444;

    span{
        background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
    }

    @media (max-width: 468px){
        font-size: 18px;
    }
`;

export const BackgroundImage = styled.div` 
    opacity: .88;
    margin-right: -10%;

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