import styled from "styled-components";

export const Title = styled.h1` 
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    text-align: center;
    margin: 0;
    padding-bottom: .3em;
`;

export const Description = styled.p` 
    margin-bottom: 3em;
    margin-top: 0;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 15px;
    color: grey;
    text-align: center;

    span{
        background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Card = styled.div` 
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    margin-bottom: 1em;
    padding: .2em 1.3em;
    width: 350px;
    cursor: pointer;
    transition: border .3s ease-out;

    p {
        margin-left: 1em;
    }

    :hover{
        border-image-source: linear-gradient(to left, #670b62, #ce213d);
        border-image-slice: 1;
        
        p{
            background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    :active{
        outline: 5px solid lightgrey;
    }
`;