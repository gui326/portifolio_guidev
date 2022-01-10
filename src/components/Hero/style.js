import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Icon = styled(KeyboardArrowDownIcon)`
    font-size: 30px!important;
`;

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 10%;
    max-width: 1240px;
    margin: auto;
`;

export const LeftSide = styled.div`
    padding-top: 4%;
    width: 50%;
`;

export const RightSide = styled.div`
    padding-top: 3%;
    display: flex;
    align-self: center;
    width: 50%;
`;

export const SubTitle = styled.h6`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 1px;
`;

export const Title = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 70%;
    font-size: 35px;
    font-weight: 700;
`;

export const SpecialText = styled.h6`
    margin-top: 25px;
    margin-bottom: 20px;
    color: #80FFDB;
    font-size: 16px;
    letter-spacing: 5%;
    font-weight: 700;
`;

export const Text = styled.p`
    font-weight: 500;
    width: 80%;
    font-size: 16px;
    color: #A7A7A7;
`;

export const Imagem = styled.img`
    margin: auto;
    max-width: 82%;
`;