import styled from '@emotion/styled';


export const StatisticsSec = styled.section`
    width: fit-content;
    border: 1px solid #8b8b8b;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    padding: 0;
    background-color: #fff;
    overflow: hidden;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
    display: flex;
    width: 100%;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    flex-grow: 1;
    border-top: 1px solid #8b8b8b;
    overflow: hidden;
    &:not(:last-child) {
        border-right: 1px solid #8b8b8b;
    }
`;

export const Label = styled.span`
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Percentage = styled.span`
    font-size: 20px;
`;