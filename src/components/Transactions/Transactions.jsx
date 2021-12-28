import { TransactionTable, TableHead, TableBody, TableHeadRow, TableHeadLine, TableBodyRow, TableBodyLine } from './Transactions.styled';

function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead>
        <TableHeadRow>
          <TableHeadLine>Type</TableHeadLine>
          <TableHeadLine>Amount</TableHeadLine>
          <TableHeadLine>Currency</TableHeadLine>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(i => (
          <TableBodyRow key={i.id}>
            <TableBodyLine>{i.type}</TableBodyLine>
            <TableBodyLine>{i.amount}</TableBodyLine>
            <TableBodyLine>{i.currency}</TableBodyLine>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
}

export default TransactionHistory;
