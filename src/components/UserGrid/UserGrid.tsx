import { useEffect, useCallback, useMemo, useTransition, useState } from 'react';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { fetchInitialUsers, loadMoreUsers } from '../../store/userSlice';
import { User } from '../../types/types';
import ResultsInfo from '../ResultInfo/ResultInfo';
import UserCard from '../UserCard/UserCard';


const UserGrid = () => {
    const dispatch = useAppDispatch();
    const { displayedUsers, error, loading, loadingMore, allUsers } = useAppSelector((state: any) => state.users);
    const [isPending, startTransition] = useTransition();
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        dispatch(fetchInitialUsers());
    }, [dispatch]);

    useEffect(() => {
        setFilteredUsers(displayedUsers);
    }, [displayedUsers]);

    const handleScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrollPosition = scrollTop + clientHeight;

        if (scrollPosition >= scrollHeight * 0.7) {
            startTransition(() => {
                dispatch(loadMoreUsers());
            });
        }
    }, [dispatch, startTransition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const userCards = useMemo(() => {
        return filteredUsers.map((user: User) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                <UserCard user={user} />
            </Grid>
        ));
    }, [filteredUsers]);

    if (loading) {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <>
            <ResultsInfo currentCount={filteredUsers.length} totalCount={allUsers.length} />
            <Grid container spacing={3} justifyContent="center">
                {userCards}
            </Grid>
            {(loadingMore || isPending) && <Typography>Loading more users...</Typography>}
        </>
    );
};

export default UserGrid;
