import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { Store } from '@reduxjs/toolkit';

jest.mock('./pages/Homepage', () => () => <div data-testid="homepage">HomePage Content</div>);

describe('App component', () => {
  const mockStore = configureStore([]);
  let store: Store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders CssBaseline', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const homePageElement = screen.getByTestId('homepage');
    expect(homePageElement).toBeInTheDocument();
  });

  test('renders HomePage', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const homePage = await screen.findByTestId('homepage');
    expect(homePage).toBeInTheDocument();
    expect(homePage).toHaveTextContent('HomePage Content');
  });
});
