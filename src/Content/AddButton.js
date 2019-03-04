import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

const AddButton = ({ classes }) => (
  <Button variant="fab" className={classes.fab} color="secondary">
    <AddIcon />
  </Button>
);

AddButton.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
};

export default withStyles(styles)(AddButton);
