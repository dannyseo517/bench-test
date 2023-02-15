import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  font-size: 18px;
`;
