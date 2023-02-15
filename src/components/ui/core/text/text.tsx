import React from 'react';
import * as Styled from './text.styled';

export type TextProps = {
  /* required child node for text */
  children: React.ReactNode;
  /**
   * optional boolean for bolding text
   * @defaultValue false
   */
  bold?: boolean;
  /**
   * keep styling but render as differnt HTML tag
   * @defaultValue 'span'
   */
  tag?: 'span' | 'div' | 'p';
  /**
   * text align for div
   * @defaultValue 'left'
   */
  textAlign?: 'left' | 'right';
};

export const Text = ({
  children,
  bold = false,
  tag = 'span',
  textAlign = 'left',
}: TextProps) => {
  return (
    <Styled.Container bold={bold} as={tag} textAlign={textAlign}>
      {children}
    </Styled.Container>
  );
};
