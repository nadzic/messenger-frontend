import { FC, ReactElement } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Messenger } from './components/messenger';
import { theme } from './constants';
import { store } from './reducers/store';


import './App.css';

require('dotenv').config()

const App: FC = (): ReactElement =>
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <Messenger />
    </ReduxProvider>
  </ThemeProvider>

export default App;