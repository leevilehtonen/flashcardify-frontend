import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { IconButton, withStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const styles = theme => ({
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

const QuizCardActions = ({ classes, actions, expander }) => (
  <CardActions>
    {actions.map(({ name, color, action, variant, fullWidth, size }) => (
      <Button
        key={name}
        size={size || 'small'}
        variant={variant || 'text'}
        fullWidth={fullWidth}
        color={color}
        className={!fullWidth ? classes.button : ''}
        onClick={() => action()}
      >
        {name}
      </Button>
    ))}
    {expander && (
      <IconButton
        className={classes.expand + (expander.expanded ? ` ${classes.expandOpen}` : '')}
        onClick={() => expander.toggleExpand()}
        aria-expanded={expander.expanded}
        aria-label="Show more"
      >
        <ExpandMore />
      </IconButton>
    )}
  </CardActions>
);

QuizCardActions.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      variant: PropTypes.string,
      fullWidth: PropTypes.bool,
      size: PropTypes.string,
    })
  ).isRequired,

  expander: PropTypes.oneOfType([
    PropTypes.shape({
      toggleExpand: PropTypes.func,
      expanded: PropTypes.bool,
    }),
    PropTypes.bool,
  ]),
};

QuizCardActions.defaultProps = {
  expander: false,
};

export default withStyles(styles)(QuizCardActions);
