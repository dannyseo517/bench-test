import React from 'react';
import { useTable } from 'react-table';
import { Text } from 'components/ui/core';
import type { Column } from 'react-table';
import type { Transaction } from 'types';

type Props = {
  transactionData: Transaction[];
};

export const Table = React.memo(({ transactionData }: Props) => {
  const columns = React.useMemo(
    () =>
      [
        {
          Header: () => <Text>Date</Text>,
          accessor: 'Date',
        },
        {
          Header: () => <Text>Company</Text>,
          accessor: 'Company',
        },
        {
          Header: () => <Text>Account</Text>,
          accessor: 'Ledger',
        },
        {
          Header: () => <Text>Amount</Text>,
          accessor: 'Amount',
        },
      ] as Column<Transaction>[],
    []
  );
  const data = React.useMemo(() => transactionData, []);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
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
    </table>
  );
});
