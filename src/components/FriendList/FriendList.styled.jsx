import styled from "@emotion/styled";

export const FriendListUl = styled.ul`
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
    margin-bottom: 50px;
`;

export const FriendItem = styled.li`
    display: flex;
    border: solid 1px transparent;
    border-radius: 10px;
    padding: 2px 15px;
    align-items: center;
    box-shadow: 2px 3px 5px 0 #727272;
    background-color: #e6e6e6;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border: 0px;
    border-radius: 50%;
    margin-right: 30px;
    background-color: ${(props) => {
        if(props.a) {
            return '#0ece0e';
        } else {
            return 'red';
        }
    }};
`;

export const FriendImg = styled.img`
    display: block;
    margin-right: 40px;
`;

export const FriendName = styled.p`
    font-size: 18px;
`;