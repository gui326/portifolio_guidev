import styled from "styled-components";

export const Area = styled.footer` 
    margin-top: 5em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: center;


    p{
        align-self: center;
        margin: 0;
        color: black;
        text-align: right;

        :hover{
            opacity: .6;
        }
    }
`;