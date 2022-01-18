import styled from "styled-components";
import SchoolIcon from '@mui/icons-material/School';

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 2rem;
    max-width: 1240px;
    margin: auto;

    @media (max-width: 468px){
        padding: 5% 1rem;
        overflow: hidden;
        position: relative;
    }
`;

export const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const HeadingIcon = styled.div`
    align-self: center;
    font-size: 40px;
`;

export const HeadingText = styled.h5`
    align-self: center;
    font-size: 18px;
    letter-spacing: 2px;
    padding-left: .7em;
`;

export const IconJourney = styled(SchoolIcon)`
    color: #80FFDB;
    font-size: 40px!important;
`;