import { Suspense } from 'react';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import UserGrid from '../components/UserGrid/UserGrid';

const HomePage = () => {
    return (
        <PageWrapper>
            <div data-testid="homepage">
                <Suspense fallback={<div>Loading...</div>}>
                    <UserGrid />
                </Suspense>
            </div>
        </PageWrapper>
    );
};

export default HomePage;
