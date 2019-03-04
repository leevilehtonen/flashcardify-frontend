import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import EditForm from './EditForm';

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
};
const EditPage = ({ classes, history, match }) => {
  const redirect = path => {
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <EditForm redirect={redirect} id={Number(match.params.id)} />
    </div>
  );
};

EditPage.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default withStyles(styles)(EditPage);
