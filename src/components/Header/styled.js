import styled from "styled-components";

export const Area = styled.header` 
    position: fixed;
    width: 100%;
    background: white;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
`;

export const LogoArea = styled.div` 
    h3{
        font-family: 'PT Serif';
        font-weight: 700;
        font-size: 32px;
        color: #000000;
        letter-spacing: -2px;
    }

    @media (max-width: 468px){
        h3{
            margin: 0.5em 0;
            font-size: 28px;
        }
    }
`;

export const MenuArea = styled.div` 
    display: block;

    @media (max-width: 468px){
        display: none;
    }
`;

export const Menu = styled.ul` 
    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;
`;

export const Item = styled.li` 
    padding: 1em;
    font-style: normal;
    ${props => props.ativo && "text-decoration: underline; text-decoration-color: var(--main-color);text-decoration-thickness: 2px;text-underline-offset: 3px;"}
    font-weight: 400;
    font-size: 18px;
    color: #000000;

    :hover{
        opacity: .6;
    }
`;

export const MenuMobile = styled.div` 
    display: none;
    align-self: center;
    padding-top: 0.8em;
    svg{
        font-size: 30px;
    }

    @media (max-width: 468px){
        display: block;
    }
`;