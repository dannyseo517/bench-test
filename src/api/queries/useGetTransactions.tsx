import { ApiClient } from 'api/api-client';
import { useQuery } from 'react-query';
import { QUERY_TRANSACTIONS } from 'constants/query-constants';

export const useGetTransactions = (pageNumber: number) => {
  return useQuery(
    [QUERY_TRANSACTIONS, pageNumber],
    async () => await ApiClient.get(`/transactions/${pageNumber}.json`)
  );
};
