import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../services/api';
import { User } from '../types/types';
import { RootState } from './store';


interface UsersState {
  allUsers: User[];
  displayedUsers: User[];
  loading: boolean;
  error: string | null;
  totalUsers: number;
  loadingMore: boolean;
}

const initialState: UsersState = {
  allUsers: [],
  displayedUsers: [],
  loading: false,
  error: null,
  totalUsers: 0,
  loadingMore: false,
};

const INITIAL_USERS_DISPLAY = 24;
const USERS_PER_BATCH = 10;

export const loadUsers = createAsyncThunk<User[]>('users/loadUsers', async () => {
  const users = await fetchUsers();
  return users;
});

export const loadMoreUsers = createAsyncThunk<User[], void, { state: RootState }>(
  'users/loadMoreUsers',
  async (_, { getState }) => {
    const state = getState();
    const { allUsers, displayedUsers } = state.users;
    const nextUsers = allUsers.slice(displayedUsers.length, displayedUsers.length + USERS_PER_BATCH);
    return nextUsers;
  }
);

export const fetchInitialUsers = createAsyncThunk<void, void, { dispatch: any }>(
  'users/fetchInitialUsers',
  async (_, { dispatch }) => {
    await dispatch(loadUsers());
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.allUsers = action.payload;
      state.displayedUsers = action.payload.slice(0, INITIAL_USERS_DISPLAY);
      state.totalUsers = action.payload.length;
    });
    builder.addCase(loadUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to load users';
    });
    builder.addCase(loadMoreUsers.pending, (state) => {
      state.loadingMore = true;
    });
    builder.addCase(loadMoreUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loadingMore = false;
      state.displayedUsers.push(...action.payload);
    });
    builder.addCase(loadMoreUsers.rejected, (state, action) => {
      state.loadingMore = false;
      state.error = action.error.message || 'Failed to load more users';
    });
  },
});

export default usersSlice.reducer;
