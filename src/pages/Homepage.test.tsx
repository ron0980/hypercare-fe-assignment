import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './Homepage';

jest.mock('../components/UserGrid/UserGrid', () => () => {
  const UserGrid = () => {
    throw new Promise(() => {});
  };
  return <UserGrid />;
});

jest.mock('../components/PageWrapper/PageWrapper', () => ({ children }: { children: ReactNode }) => <div data-testid="pagewrapper">{children}</div>);

describe('HomePage component', () => {
  test('renders PageWrapper correctly', () => {
    render(<HomePage />);
    const pageWrapperElement = screen.getByTestId('pagewrapper');
    expect(pageWrapperElement).toBeInTheDocument();
  });

  test('renders homepage div', () => {
    render(<HomePage />);
    const homePageElement = screen.getByTestId('homepage');
    expect(homePageElement).toBeInTheDocument();
  });

  test('renders Suspense fallback initially', async () => {
    render(<HomePage />);
    const fallbackElement = await screen.findByText('Loading...');
    expect(fallbackElement).toBeInTheDocument();
  });
});
