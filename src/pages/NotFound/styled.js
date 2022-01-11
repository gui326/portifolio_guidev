import { keyframes } from "styled-components";
import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 83vh;
`;

export const ErrorArea = styled.div`
    width: 30%;
    margin: auto;
    text-align: center;
`;

export const ErrorMessage = styled.h6`
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: white;
`;

export const ErrorButton = styled.button`
    padding: 12px 25px;
    border: 0;
    border-radius: 50px;
    background: #80FFDB;
    color: black;
    transition: all ease .3s;
    font-weight: 700;

    :hover{
        color: white;
        background: #6930C3;
    }
`;

const error404 = keyframes`
    0% {
        transform: rotate(1deg);
        left: 0%;
        top: 30%;
    }

    50% {
        transform: rotate(45deg);
        left: 50%;
        top: 75%;
    }

    100% {
        transform: rotate(0deg);
        left: 100%;
        top: 57%;
    }
`;

export const Error404 = styled.h4`
    position: absolute;
    margin-top: 0;
    font-size: 3rem;
    filter: blur(1px) contrast(0.5);
    color: #80FFDB;
    animation: ${error404} 15s linear infinite;
`;

