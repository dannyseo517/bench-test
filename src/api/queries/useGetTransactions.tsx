import { ApiClient } from 'api/api-client';
import { useQuery, useQueries } from 'react-query';
import { QUERY_TRANSACTIONS } from 'constants/query-constants';

import type { UseQueryResult } from 'react-query';
import type { AxiosResponse } from 'axios';
import type { Transaction } from 'types';

type TransactionResponse = {
  page: number;
  totalCount: number;
  transactions: Transaction[];
};

const fetchTransaction = async (pageNumber: number) =>
  await ApiClient.get<TransactionResponse>(`/transactions/${pageNumber}.json`);

export const useGetTransactions = (): UseQueryResult<
  AxiosResponse<TransactionResponse, any>
>[] => {
  // make first api call for the first page to find out how many pages we need
  const firstPage = useQuery([QUERY_TRANSACTIONS, 1], () =>
    fetchTransaction(1)
  );
  const totalPages = Math.ceil((firstPage.data?.data.totalCount || 0) / 10);

  return useQueries(
    [...Array(totalPages)].map((_, pgNumber) => ({
      queryKey: [QUERY_TRANSACTIONS, pgNumber + 1],
      queryFn: () => fetchTransaction(pgNumber + 1),
    }))
  );
};
