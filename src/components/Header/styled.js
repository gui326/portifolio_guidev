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
    display: flex;
    align-items: center;

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
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    ${props => props.ativo && "background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"}
    

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