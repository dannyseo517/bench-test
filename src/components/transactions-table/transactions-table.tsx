import React from 'react';
import { useGetTransactions } from 'api/queries';

export const TransactionsTable = () => {
  const { isLoading, data } = useGetTransactions(1);

  // TODO
  console.log(isLoading, data);

  return <div>test ya</div>;
};
