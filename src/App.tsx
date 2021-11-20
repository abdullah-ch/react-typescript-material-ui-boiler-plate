import React from 'react';
import theme from './theme/theme';
import './theme/App.global.css';
import { ThemeProvider } from '@material-ui/styles';
import Home from './pages/Home';

// Recording
// Each Meeting Tasks

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
