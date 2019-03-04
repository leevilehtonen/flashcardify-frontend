import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const QuizCardActions = ({ actions }) => (
  <CardActions>
    {actions.map(({ name, color, action, variant, fullWidth }) => (
      <Button
        key={name}
        size="small"
        variant={variant || 'text'}
        fullWidth={fullWidth}
        color={color}
        onClick={() => action()}
      >
        {name}
      </Button>
    ))}
  </CardActions>
);

QuizCardActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      variant: PropTypes.string,
      fullWidth: PropTypes.bool,
    })
  ).isRequired,
};

export default QuizCardActions;
