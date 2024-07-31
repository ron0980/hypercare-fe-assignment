import { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LazyLoadImage from './LazyLoadImage';

jest.mock('react-lazyload', () => ({ children }: { children: ReactNode }) => <>{children}</>);

describe('LazyLoadImage Component', () => {

    test('renders the image correctly when in the viewport', async () => {
        render(<LazyLoadImage src="test.jpg" alt="test image" />);

        await waitFor(() => {
            expect(screen.getByAltText('test image')).toBeInTheDocument();
        });
    });

    test('applies className and style props correctly', async () => {
        const className = 'test-class';
        const style = { width: '100px', height: '100px' };
        render(<LazyLoadImage src="test.jpg" alt="test image" className={className} style={style} />);

        const img = await screen.findByAltText('test image');
        expect(img).toHaveClass(className);
        expect(img).toHaveStyle('width: 100px');
        expect(img).toHaveStyle('height: 100px');
    });
});
