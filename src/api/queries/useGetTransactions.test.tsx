import { useGetTransactions } from './useGetTransactions';
import { AllTheProviders, renderHook, waitFor } from 'test-utils';
import mockAxios from 'jest-mock-axios';

describe('useGetTransactions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    mockAxios.reset();
  });

  test('should return isSuccess true for first call', async () => {
    mockAxios.get.mockResolvedValue({
      data: {
        totalCount: 1,
      },
    });
    const { result } = renderHook(() => useGetTransactions(), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => expect(result.current[0].isSuccess).toBe(true));
  });

  test('should return isSuccess for all calls', async () => {
    mockAxios.get.mockResolvedValue({
      data: {
        totalCount: 11,
      },
    });

    const { result } = renderHook(() => useGetTransactions(), {
      wrapper: AllTheProviders,
    });

    await waitFor(() => {
      expect(result.current[0].isSuccess).toBe(true);
      expect(result.current[1].isSuccess).toBe(true);
    });
  });
});
