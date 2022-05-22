import styled from "styled-components";

export const Title = styled.h2` 
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 36px;
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
    color: #0b0b0b;
    text-align: center;
    line-height: 1.7em;

    span{
        background: -webkit-linear-gradient(left,#670b62 10%, #a51d62 30%, #ce213d 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const SubTitle = styled.h5` 
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-align: center;

    @media (max-width: 468px){
        font-size: 16px;
    }
`;

export const Card = styled.div` 
    margin: .3em;
    flex: 1;
    background: white;
    padding: 2em 0;
    border-radius: 6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    text-align: center;
    border-radius: 12px;
    transition: all .3s ease-out;

    p{
        padding-top: 1em;
        text-align: center;
        margin: 0;
        color: black;
        font-size: 18px;
    }

    .text--show{
        font-weight: 600;
    }

    .info--show{
        display: none;
    }
    
    

    :hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

        .text--show{
            display: none;
        }

        .info--show{
            display: block;
        }

        
    }

    @media (max-width: 468px){
        min-width: 50%;

        .text--show{
            margin: 0;
            padding-top: 1em;
            display: block;
        }

        .info--show{
            padding-top: .2em;
            margin: 0;
            display: block;
        }

        p{
            font-size: 15px;
        }

        img{
            filter: grayscale(0);
        }

        :hover{
            .text--show{
                display: block;
            }

            .info--show{
                display: block;
            }
        }
    }
`;

export const KnowArea = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    div{
        min-width: 18%;
    }

    @media (max-width: 468px){
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 5px;
    }
`;