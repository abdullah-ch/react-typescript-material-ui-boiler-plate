import React from 'react';
import theme from './theme/theme';
import './theme/App.global.css';
import { ThemeProvider } from '@material-ui/styles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <h1>React-TypeScript-Boiler-Plate</h1>
        </ThemeProvider>
    );
};

export default App;
