import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Text } from './index';

describe('Text render', () => {
  afterEach(cleanup);

  it('should render text component', () => {
    const { getByTestId } = render(
      <Text data-testid="TestText" value="Login" />
    );

    const text = getByTestId('TestText');
    expect(text).toBeTruthy();
  });

  it('should render with size prop', () => {
    const { getByTestId } = render(
      <Text value="Login" size="small" data-testid="TestText" />
    );

    const text = getByTestId('TestText');
    expect(text).toBeTruthy();
  });

  it('should render with variant prop', () => {
    const { getByTestId } = render(
      <Text
        value="Login"
        variant="normal"
        data-testid="TestText"
      />
    );

    const text = getByTestId('TestText');
    expect(text).toBeTruthy();
  });
});
