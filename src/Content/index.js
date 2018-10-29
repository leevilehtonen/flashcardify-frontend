import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import PredictPage from './pages/PredictPage';
import CollectionsPage from './pages/CollectionsPage';
import ExplorePage from './pages/ExplorePage';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    overflow: 'auto',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
    height: '100vh',
  },
});

const Content = ({ classes }) => (
  <main className={classes.content}>
    <div className={classes.toolbar} />
    <React.Fragment>
      <Route exact path="/" component={PredictPage} />
      <Route path="/collections" component={CollectionsPage} />
      <Route path="/explore" component={ExplorePage} />
    </React.Fragment>
  </main>
);

Content.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
};

export default withStyles(styles)(Content);
