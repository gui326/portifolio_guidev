import styled from "styled-components";

export const HeaderArea = styled.header`
    display: flex;
    width: 100%;
    padding: 1.5rem 4rem;
    max-width: 1240px;
    margin: auto;
    box-sizing: border-box;

    @media (max-width: 468px){
        padding: 1.5rem 1rem;
    }
`;

export const HeaderLogoArea = styled.div`
    align-self: center;
`;

export const HeaderLogo = styled.p`
    font-family: 'Kadwa';
    color: #80FFDB;
    font-size: 1.7rem;
    letter-spacing: -3px;
    cursor: pointer;
`;

export const HeaderBar = styled.ul`
    margin-left: auto;
    align-self: center;
    display: flex;

    @media (max-width: 468px){
        display: none;
    }
`; 

export const HeaderItem = styled.li`
    padding: 0 .8rem;
    cursor: pointer;
    transition: all ease .3s;

    :hover{
        color: #6930C3;
    }
`;

export const HeaderMobile = styled.div`
    display: none;
    margin-left: auto;
    align-self: center;

    svg{
        font-size: 35px;
    }

    @media (max-width: 468px){
        display: block;
    }
`;