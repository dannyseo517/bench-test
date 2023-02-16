import React from 'react';
import { render, screen, waitFor } from 'test-utils';
import { TransactionsTable } from './transactions-table';
import { Transactions } from './transactions';
import mockAxios from 'jest-mock-axios';

const mockData = [
  {
    Date: '2013-12-22',
    Ledger: 'Phone & Internet Expense',
    Amount: '-110.71',
    Company: 'SHAW CABLESYSTEMS CALGARY AB',
  },
  {
    Date: '2013-12-21',
    Ledger: 'Travel Expense, Nonlocal',
    Amount: '-8.1',
    Company: 'BLACK TOP CABS VANCOUVER BC',
  },
  {
    Date: '2013-12-21',
    Ledger: 'Business Meals & Entertainment Expense',
    Amount: '-9.88',
    Company: 'GUILT & CO. VANCOUVER BC',
  },
  {
    Date: '2013-12-20',
    Ledger: 'Travel Expense, Nonlocal',
    Amount: '-7.6',
    Company: 'VANCOUVER TAXI VANCOUVER BC',
  },
  {
    Date: '2013-12-20',
    Ledger: 'Business Meals & Entertainment Expense',
    Amount: '-120',
    Company: 'COMMODORE LANES & BILL VANCOUVER BC',
  },
];

describe('<TransactionsTable />', () => {
  const subject = () =>
    render(<TransactionsTable transactionData={mockData} />);

  test('should 4 columns with correct names', () => {
    subject();
    const test = screen.getAllByRole('columnheader');

    expect(test[0].textContent).toBe('Date');
    expect(test[1].textContent).toBe('Company');
    expect(test[2].textContent).toBe('Account');
    expect(test[3].textContent).toBe('-$256.29');
  });

  test('should render 6 rows (1 header + 5 body)', () => {
    subject();

    expect(screen.getAllByRole('row').length).toBe(6);
  });
  test('should render 1 rows (1 header + 0 body) if transactionData is empty', () => {
    render(<TransactionsTable transactionData={[]} />);

    expect(screen.getAllByRole('row').length).toBe(1);
  });

  test('should format date correctly', () => {
    subject();

    // assuming first item in table body is date
    expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Dec-22nd, 2013');
  });

  test('should format currency correctly', () => {
    subject();

    // assuming 4th item in table body is date
    expect(screen.getAllByRole('cell')[3]).toHaveTextContent('-$110.71');
  });
});

describe('<Transactions />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    mockAxios.reset();
  });

  const subject = () => render(<Transactions />);

  test('should render data from api', async () => {
    mockAxios.get.mockResolvedValue({
      data: {
        totalCount: mockData.length,
        transactions: mockData,
      },
    });
    subject();

    await waitFor(() => {
      expect(screen.getAllByRole('cell')[0]).toHaveTextContent(
        'Dec-22nd, 2013'
      );
      expect(screen.getAllByRole('cell')[3]).toHaveTextContent('-$110.71');
    });
  });
});
