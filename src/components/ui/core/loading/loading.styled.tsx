import styled from 'styled-components';
import LoadingSvg from 'assets/loading.svg';

export const LoadingContainer = styled(LoadingSvg)`
  fill: ${({ theme }) => theme.color.primary};
`;
