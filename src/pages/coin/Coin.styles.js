import styled from 'styled-components'

export const Content = styled.div`
    max-width: 740px;
    margin: .5rem auto;
    padding: .7rem 1rem;
    display: flex;
    flex-direction: column;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
`;

export const Rank = styled.div`
    margin: .5rem 0;
`;

export const RankBtn = styled.span`
    border: 1px solid #6900ff;
    background: #6900ff;
    border-radius: 8px;
    padding: .3rem .4rem;
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: repeate(2, 1fr);
`;

export const InfoHeading = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`;

export const CoinPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoText = styled.p`
    padding-right: 1rem;
`;

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 100%;
`;

export const StatsRow = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #888;
    margin: .6rem 0;
    padding-bottom: .5rem;
`;

export const StatsText = styled.p`
    color: #d3d3d3;
`;

export const Table = styled.table`
    margin: .5rem 0;
`;

export const Td = styled.td`
    padding: 8px;
    text-align: center;
`;

export const Th = styled.th`
    padding: 8px;
    text-align: center;
    background-color: #333;
`;

export const About = styled.div`
    padding: 1rem;

    p {
        opacity: 70%;
        line-height: 1.5;
        word-spacing: 1.5;
    }
    h3 {
        margin: 1rem 0;
        font-size: 1.4rem;
    }
`;