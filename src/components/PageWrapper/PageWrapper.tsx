import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface PageWrapperProps {
    children: React.ReactNode;
}

const StyledPageWrapper = styled(Box)({
    padding: '32px',
    margin: '0 auto',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
});

const PageWrapper = ({ children }: PageWrapperProps) => {
    return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
