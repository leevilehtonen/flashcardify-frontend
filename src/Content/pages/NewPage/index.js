import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import NewForm from './NewForm';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: theme.spacing(3),
  },
});

const NewPage = ({ classes, history }) => {
  const redirect = path => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <NewForm redirect={redirect} />
    </div>
  );
};

NewPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default withStyles(styles)(NewPage);
