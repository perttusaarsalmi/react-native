import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';
import useSignIn from '../../hooks/useSignIn';
import { MemoryRouter } from 'react-router-native';
jest.mock('../../hooks/useSignIn');

describe('SignIn', () => {
  it('calls onSubmit with correct arguments when form is submitted', async () => {
    const onSubmit = jest.fn();
      const mockSignIn = jest.fn();
      useSignIn.mockReturnValue([mockSignIn]);

      render(
        <MemoryRouter>
          <SignInContainer onSubmit={onSubmit} />
        </MemoryRouter>
      );

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'psaarsal');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), '123456789');
    fireEvent.press(screen.getByText(/Sign In/i));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'psaarsal',
        password: '123456789',
      });
    });
  });
});