import styled from "styled-components";

export const HeaderArea = styled.header`
    background: linear-gradient(177deg, #151515, #151515e0);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1040;
`;

export const Principal = styled.div`
    height: 5em;
    display: flex;
    width: 100%;
    padding: 1.5rem 0;
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

export const MenuMobile = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: black;
    z-index: 1050;
    text-align: center;
`;

export const MenuArea = styled.ul`
    width: 100%;
    padding-top: 6em;
`;

export const MenuItem = styled.li`
    width: 100%;
    font-size: 5em;

    :hover, :active{
        color: #6930C3;
    }
`;

export const MenuButton = styled.div`
    width: 100%;
    text-align: right;
    position: relative;
    top: 1.3em;
    right: 1.3em;

    svg{
        font-size: 2.7em;
    }

`;