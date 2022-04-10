import styled from "styled-components";

export const Title = styled.h1` 
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    text-align: center;
`;

export const Card = styled.div` 
    background: white;
    border-radius: 12px;
    padding: 2em 1.5em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex: 1;

    h3{
        margin: 0;
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 42px;
        color: #000000;
        padding: .2em 0;
    }

    p{
        margin: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.7em;
        color: #2E2B2B;
    }

    a{
        text-decoration: underline;
        align-self: center;
        text-underline-offset: 1px;

        :hover{
            opacity: .6;
        }
    }

    svg{
        color: black;
        cursor: pointer;
        font-size: 30px;

        :hover{
            opacity: .6;
        }
    }

    :hover{
        outline: 1px solid var(--main-color);

        div{
            img{
                filter: grayscale(0);
            }
        }
    }
`;

export const StackArea = styled.div` 
    gap: 15px;
    display: flex;
    padding-top: 1.2em;
    padding-bottom: 2em;

    img{
        filter: grayscale(.9);
        transition: all .3s ease-out;
    }

    @media (max-width: 468px){
        img{
            filter: grayscale(0);
        }
    }
`;

export const Badge = styled.span` 
    background: var(--main-color);
    font-size: 10px;
    padding: 0.5em 1em;
    border-radius: 12px;
    color: white;
    position: relative;
    bottom: 6px;
`;

export const LinkArea = styled.div` 
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
`;
