import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Navigation from './Navigation';
import Content from './Content';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
  },
};

const App = ({ classes }) => (
  <div className={classes.root}>
    <BrowserRouter>
      <React.Fragment>
        <Navigation />
        <Content />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
