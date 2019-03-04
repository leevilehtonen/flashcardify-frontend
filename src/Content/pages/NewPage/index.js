import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import NewForm from './NewForm';

const styles = {
  root: {
    width: '100%',
  },
};
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
