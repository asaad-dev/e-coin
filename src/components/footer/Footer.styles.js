import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
    background-color: #101522;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 0 2rem 0;    

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`;

export const FooterRow = styled.div`
    display: flex;

    @media screen and (max-width: 960px) {
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
`;

export const FooterLinkTitle = styled.h3`
    margin-bottom: 16px;
    font-size: ${({fontBig}) => (fontBig ? '1.4rem' : '1.1rem')};
    text-transform: ${({upperCase}) => (upperCase ? 'uppercase' : 'normal')};
`;

export const FooterText = styled.p`
    color: #fff;
    margin-bottom: 10px;
    opacity: ${({opacity}) => (opacity ? '50%' : '')};
    font-size: ${({sizeSmall}) => sizeSmall ? '12px' : '1rem' };
    font-family: ${({fontFamily}) => (fontFamily ? ' Courier' : '')};
`;

export const Form = styled.form`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 1rem;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin: .5rem .5rem 0 0;
`;