import styled from "styled-components";

export const Area = styled.div` 
    text-align: center;
`;

export const Item = styled.h4` 
    font-size: 32px;
    font-family: "PT Serif";
    color: ${props => props.ativo ? "var(--main-color)" : "black"};
`;