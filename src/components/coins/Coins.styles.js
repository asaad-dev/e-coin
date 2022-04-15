import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: 0.7rem 1rem;
    font-weight: bold;
`;

export const CoinRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
    margin: 1rem;
    padding: 0.7rem 1rem;

    &:hover {
        transform: scale(1.04);
        transition: .3s ease-in-out;
        cursor: pointer;
    }
`;

export const Text = styled.p`
    font-size: 1rem;
    margin-left: ${({marginLeft}) => (marginLeft ? '-2rem' :0)};
`;

export const ImgSymbol = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    height: 40px;
    margin-right: 8px;
    width: auto;
`;

/** Card **/

export const CardContainer = styled.div`
    background-color: #1b2030;
    display: flex;
    flex-direction: column;
    padding: 12px 22px;
    margin: 10px ;
    width: 170px;
    height: 170px;
    border-radius: 24px;
    border: 1px solid #d3d3d3;
    box-shadow: rgba(0 0 0 / 12%) 0px 8px 24px;
    text-align: center;

    &:hover {
        box-shadow: rgba(0 0 0 / 20%) 0px 8px 24px;
    }
`;

export const CardLink = styled(Link)`
    &:hover {
    transform: scale(1.04);
    transition: .3s ease-in-out;
    cursor: pointer;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardImg = styled.img`
    width: 50px;
    margin: auto;
    padding: .2rem 0;
`;

export const CardHeading = styled.h5`
    font-size: 1rem;
`;

export const CardBody = styled.p`
    padding: .6rem 0;
`;

export const PriceChange = styled.span`
font-size: 22px;
color: ${({increase}) => (increase ? '#03C77A' : '#ff3b69')};
`;