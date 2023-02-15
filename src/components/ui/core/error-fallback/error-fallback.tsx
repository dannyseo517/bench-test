import React from 'react';
import { Text } from 'components/ui/core';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error }: FallbackProps) => {
  // TODO log to some error reporting like sentry

  return <Text>{error.toString()}</Text>;
};
