import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  progressWrapper: {
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    transform: 'translate(0, -50%)',
  },
  progress: {
    margin: theme.spacing(3),
  },
});
const ProgressView = ({ classes }) => (
  <div className={classes.progressWrapper}>
    <CircularProgress className={classes.progress} />
  </div>
);

ProgressView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressView);
