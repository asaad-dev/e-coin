import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    padding: 60px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 500px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#fff')};
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const Heading = styled.h1`
    margin: 24px 0;
    font-size: 2.7rem;
    line-height: 1.1;
    letter-spacing: 1px;
    word-spacing: 1px;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 1rem;
    line-height: 32px;
    font-size: 1.5rem;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

/** Image **/

export const ImgWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;
`;

