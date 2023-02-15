import React from 'react';
import styled from 'styled-components';
import type { TableProps } from 'react-table';

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  > table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    > thead {
      th {
        color: ${({ theme }) => theme.color.primary};
        text-align: left;
      }
    }

    > tbody {
      tr {
        background-color: ${({ theme }) => theme.color.grey50};
      }
      tr:last-child td,
      tr:last-child th {
        border: 0px solid;
      }

      tr:nth-of-type(even) td {
        color: ${({ theme }) => theme.color.primary};
      }
    }

    td,
    th {
      padding: 14px 24px;
      border-bottom: 1px solid ${({ theme }) => theme.color.grey100};
      color: ${({ color, theme }) => theme.color[color || 'black']};
      font-weight: bold;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

export const StyledTable = ({ children, ...tableProps }: Props) => {
  return (
    <Container>
      <table {...tableProps}>{children}</table>
    </Container>
  );
};
