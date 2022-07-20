import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/store';

describe('Testing Log In', () => {
  test('Login with valid credentials', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const signin = screen.getByText('Sign In');
    userEvent.click(signin);

    const emailInput = await screen.findByPlaceholderText('Email@something.com');
    const passwordInput = await screen.findByLabelText('Password');
    const loginButton = screen.getByText('Sign In');

    userEvent.type(emailInput, 'example@example.com');
    userEvent.type(passwordInput, 'example');
    userEvent.click(loginButton);
    await waitFor(() => expect(screen.findByText('Logged in as:Example')).toBeTruthy());
  });
});
