import styled from "@emotion/styled";

export const TransactionTable = styled.table`
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    background-color: #14b5ca;
`;

export const TableHeadRow = styled.tr`
    color: #fff;
`;

export const TableHeadLine = styled.th`
    font-size: 25px;
    padding: 10px 40px;
    &:not(:last-child) {
        border-right: solid 1px #fff;
    }
`;

export const TableBody = styled.tbody`
    background-color: #fff;
`;

export const TableBodyRow = styled.tr`
    &:nth-of-type(2n) {
        background-color: #f3f0f0;
    }
`;

export const TableBodyLine = styled.th`
    padding: 8px 25px;
    font-size: 18px;
    &:not(:last-child) {
        border-right: solid 1px #d6d6d6;
    }
`;