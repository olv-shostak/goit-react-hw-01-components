import styled from '@emotion/styled'

export const ProfileCont = styled.div`
margin-right: auto;
margin-left: auto;
    display: flex;
    margin-bottom: 50px;
    width: 300px;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid #8b8b8b;
    border-radius: 10px;
`;

export const Description = styled.div`
    padding: 10px;
    text-align: center;
`;

export const AvatarImg = styled.img` 
    display: block;
    width: 250px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #8b8b8b;
    border-radius: 50%;
    background-color: #dfdfdf;
`;

export const UserName = styled.p`
    font-size: 25px;
    margin-bottom: 15px;
`;

export const UserTag = styled.p`
    font-size: 18px;
    margin-bottom: 15px;
    color: #458181;
`;

export const UserLocation = styled.p`
    font-size: 20px;
    color: #458181;
`;

export const StatsList = styled.ul`
    display: flex;
    width: 100%;
    padding-inline-start: 0px;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const StatsItem = styled.li`
    font-size: 18px;
    padding: 5px;
    flex-grow: 1;
    text-align: center;
    border-top: 1px solid #8b8b8b;
    color: #363636;
    &:not(:last-child) {
        border-right: 1px solid #8b8b8b;
    }
`;

export const StatsLabel = styled.span`
    display: block;
    margin-bottom: 5px;
`;
export const StatsQuantity = styled.span`
    display: block;
`;