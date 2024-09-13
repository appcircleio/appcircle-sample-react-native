import 'react-native';
import React from 'react';
import Header from '../src/components/Header';
import {render} from '@testing-library/react-native';

describe('Home Screen', () => {
  test('should render component withot error', () => {
    render(<Header />);
  });

  test('should render appcircle title', () => {
    const {getByText} = render(<Header />);

    expect(getByText(/appcircle.io/i)).toBeOnTheScreen();
  });
});
