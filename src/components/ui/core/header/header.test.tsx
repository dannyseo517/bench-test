import React from 'react';
import { render, screen } from 'test-utils';
import { Header } from './header';

describe('<Header />', () => {
  test('should render children', () => {
    render(<Header>Header Test</Header>);

    expect(screen.getByRole('banner')).toHaveTextContent('Header Test');
  });
});
