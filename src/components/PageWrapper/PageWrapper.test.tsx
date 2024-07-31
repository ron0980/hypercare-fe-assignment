import { render, screen } from '@testing-library/react';
import PageWrapper from './PageWrapper';

describe('PageWrapper Component', () => {
    test('renders children correctly', () => {
        render(
            <PageWrapper>
                <div data-testid="child">Child Component</div>
            </PageWrapper>
        );

        const childElement = screen.getByTestId('child');
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent('Child Component');
    });
});
