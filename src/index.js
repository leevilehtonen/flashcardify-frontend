import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SnackbarProvider } from 'notistack';
import { Button } from '@material-ui/core';
import Theme from './misc/Theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <MuiThemeProvider theme={Theme}>
    <SnackbarProvider
      maxSnack={3}
      action={[
        <Button key="dismiss" color="secondary" size="small">
          {'Dismiss'}
        </Button>,
      ]}
    >
      <CssBaseline>
        <App />
      </CssBaseline>
    </SnackbarProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
