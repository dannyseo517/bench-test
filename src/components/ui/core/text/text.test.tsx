import React from 'react';
import { render, screen } from 'test-utils';
import { Text } from './text';

describe('<Text />', () => {
  test('should render children', () => {
    render(<Text>Text test</Text>);

    expect(screen.getByText('Text test')).toBeTruthy();
  });

  it('should render a span component', () => {
    const { container } = render(<Text tag="span">Text test</Text>);
    expect(container.querySelector('span')).toBeTruthy();
  });

  it('should render a div component', () => {
    const { container } = render(<Text tag="div">Text test</Text>);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('should render a p component', () => {
    const { container } = render(<Text tag="p">Text test</Text>);
    expect(container.querySelector('p')).toBeTruthy();
  });
});
