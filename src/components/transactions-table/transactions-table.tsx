import React from 'react';
import { useGetTransactions } from 'api/queries';
import { Table } from './table';
import { Loading } from 'components/ui/core';
import type { Transaction } from 'types';

export const TransactionsTable = () => {
  const transactions = useGetTransactions();
  const isLoading = transactions.some((t) => t.isLoading);

  if (isLoading) return <Loading />;
  const transactionData = transactions.reduce((acc, current) => {
    acc = [...acc, ...(current.data?.data.transactions || [])];
    return acc;
  }, [] as Transaction[]);
  console.log(transactions, transactionData);

  return (
    <>
      <Table transactionData={transactionData} />
    </>
  );
};
