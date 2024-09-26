import 'react-native';
import React from 'react';
import Form from '../src/components/Form';
import {fireEvent, render} from '@testing-library/react-native';

describe('Home Screen', () => {
  test('should validate email input', async () => {
    const {getByText, queryByText, getByPlaceholderText} = render(<Form />);
    const validationErrorMessage = 'E-mail is not valid';

    const emailInput = getByPlaceholderText(/Enter your email/i);
    expect(emailInput).toBeOnTheScreen();
    expect(queryByText(validationErrorMessage)).not.toBeOnTheScreen();

    await fireEvent.changeText(emailInput, 'test@');
    expect(queryByText(validationErrorMessage)).toBeOnTheScreen();
    await fireEvent.changeText(emailInput, 'test@mail.com');
    expect(queryByText(validationErrorMessage)).not.toBeOnTheScreen();
  });

  test('fail this test on purpose', async () => {
    const {getByText, queryByText, getByPlaceholderText} = render(<Form />);
    const validationErrorMessage = 'E-mail is not valid';

    const emailInput = getByPlaceholderText(/Enter your email/i);
    expect(emailInput).toBeOnTheScreen();
    expect(queryByText(validationErrorMessage)).not.toBeOnTheScreen();

    await fireEvent.changeText(emailInput, 'test@');
    expect(queryByText(validationErrorMessage)).not.toBeOnTheScreen();
  });
});
