import React from 'react';
import { useGetTransactions } from 'api/queries';
import { TransactionsTable } from './transactions-table';
import { Loading } from 'components/ui/core';
import type { Transaction } from 'types';

export const Transactions = () => {
  const transactions = useGetTransactions();
  const isLoading = transactions.some((t) => t.isLoading);

  if (isLoading) return <Loading />;

  const transactionData = transactions.reduce((acc, current) => {
    acc = [...acc, ...(current.data?.data.transactions || [])];
    return acc;
  }, [] as Transaction[]);

  return <TransactionsTable transactionData={transactionData} />;
};
