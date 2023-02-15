import React from 'react';
import { useGetTransactions } from 'api/queries';
import { TransactionsTable } from './transactions-table';
import { Loading } from 'components/ui/core';
import type { Transaction } from 'types';
import { useErrorHandler } from 'react-error-boundary';

export const Transactions = () => {
  const transactions = useGetTransactions();
  const isLoading = transactions.some((t) => t.isLoading);
  const hasError = transactions.some((t) => t.isError);
  const handleError = useErrorHandler();

  React.useEffect(() => {
    if (hasError) {
      handleError('Failed to fetch transaction data');
    }
  }, [hasError]);

  if (isLoading) return <Loading />;

  const transactionData = transactions.reduce((acc, current) => {
    acc = [...acc, ...(current.data?.data.transactions || [])];
    return acc;
  }, [] as Transaction[]);

  return <TransactionsTable transactionData={transactionData} />;
};
