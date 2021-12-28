import PropTypes from 'prop-types';
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

TransactionTable.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  amount: PropTypes.number,
  currency: PropTypes.string,
}

export default TransactionHistory;
