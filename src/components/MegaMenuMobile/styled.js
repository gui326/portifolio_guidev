import styled from "styled-components";

export const Area = styled.div` 
    text-align: center;
`;

export const Item = styled.h4` 
    font-size: 32px;
    margin: 0;
    padding: .4em 0;
    font-family: "PT Serif";
    color: black;
    ${props => props.ativo && "background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"}
`;