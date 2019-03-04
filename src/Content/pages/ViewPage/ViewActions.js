import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, IconButton, withStyles, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const styles = theme => ({
  root: {},
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    marginRight: theme.spacing(1),
  },
});

const ViewActions = ({ classes, expanded, toggleExpand, navigate, id }) => {
  return (
    <CardActions className={classes.actions} disableActionSpacing>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => navigate(`/predict/${id}`)}
      >
        Start
      </Button>
      <Button color="primary" className={classes.button} onClick={() => navigate(`/edit/${id}`)}>
        Edit
      </Button>
      <Button color="primary" className={classes.button} onClick={() => navigate(`/edit/${id}`)}>
        Delete
      </Button>
      <IconButton
        className={classes.expand + (expanded ? ` ${classes.expandOpen}` : '')}
        onClick={() => toggleExpand()}
        aria-expanded={expanded}
        aria-label="Show more"
      >
        <ExpandMore />
      </IconButton>
    </CardActions>
  );
};

ViewActions.propTypes = {
  classes: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default withStyles(styles)(ViewActions);
