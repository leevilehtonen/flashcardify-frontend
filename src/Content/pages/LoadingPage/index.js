import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';

const styles = {
  root: {
    margin: 'auto',
  },
};

const LoadingPage = ({ classes }) => <CircularProgress className={classes.root} />;

LoadingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPage);
