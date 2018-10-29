import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './misc/Theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <MuiThemeProvider theme={Theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
