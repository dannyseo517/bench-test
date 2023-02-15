import React from 'react';
import { useGetTransactions } from 'api/queries';
import { Table } from './table';
import { Loading } from 'components/ui/core';

export const TransactionsTable = () => {
  const transactions = useGetTransactions();
  const isLoading = transactions.some((t) => t.isLoading);

  if (isLoading) return <Loading />;

  return (
    <>
      <Table />
    </>
  );
};
