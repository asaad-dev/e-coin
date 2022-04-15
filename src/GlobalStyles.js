import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@400;700&family=Oxygen:wght@300;400;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background: #101522;
        color: #fff;
    }

    a {
        color: #f4f4f4;
        text-decoration: none;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100vw;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`;

export const Heading = styled.h1`
    text-align: center;
    margin: 1rem;
`;

export const SubHeading = styled.h2`
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
`

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    color: #fff;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;
