import React from 'react';
import { useTable } from 'react-table';
import { Text, StyledTable } from 'components/ui/core';
import type { Column } from 'react-table';
import type { Transaction } from 'types';
import { formatDate, formatNumberToCurrency } from 'helpers';

type Props = {
  transactionData: Transaction[];
};

export const TransactionsTable = React.memo(({ transactionData }: Props) => {
  const totalAmount = transactionData.reduce(
    (acc, current) => (acc += Number(current.Amount)),
    0
  );
  const columns = React.useMemo(
    () =>
      [
        {
          Header: () => <Text bold>Date</Text>,
          accessor: 'Date',
          Cell: ({ value }) => formatDate(value),
        },
        {
          Header: () => <Text bold>Company</Text>,
          accessor: 'Company',
        },
        {
          Header: () => <Text bold>Account</Text>,
          accessor: 'Ledger',
        },
        {
          Header: () => (
            <Text tag="div" textAlign="right" bold>
              {formatNumberToCurrency(totalAmount)}
            </Text>
          ),
          accessor: 'Amount',
          Cell: ({ value }) => (
            <Text tag="div" textAlign="right" bold>
              {formatNumberToCurrency(Number(value))}
            </Text>
          ),
        },
      ] as Column<Transaction>[],
    [totalAmount]
  );
  const data = React.useMemo(() => transactionData, [transactionData]);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
});
