import { render, screen } from '@testing-library/react';
import ResultsInfo from './ResultInfo';

describe('ResultsInfo Component', () => {
  test('renders the message when totalCount is greater than currentCount', () => {
    render(<ResultsInfo currentCount={5} totalCount={10} />);
    expect(screen.getByText('Showing 5 of 10 results')).toBeInTheDocument();
  });

  test('does not render the message when totalCount is less than or equal to currentCount', () => {
    render(<ResultsInfo currentCount={10} totalCount={10} />);
    expect(screen.queryByText('Showing 10 of 10 results')).not.toBeInTheDocument();

    render(<ResultsInfo currentCount={15} totalCount={10} />);
    expect(screen.queryByText('Showing 15 of 10 results')).not.toBeInTheDocument();
  });
});
