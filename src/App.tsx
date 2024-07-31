  import { Provider } from 'react-redux';
  import { CssBaseline } from '@mui/material';
  import store from './store/store';
  import HomePage from './pages/Homepage';

  function App() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <HomePage />
      </Provider>
    );
  }

  export default App;
