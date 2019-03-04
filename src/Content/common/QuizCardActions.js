import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const QuizCardActions = ({ actions }) => (
  <CardActions>
    {actions.map(({ name, color, action }, id) => (
      <Button key={id} size="small" color={color} onClick={() => action()}>
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
    })
  ).isRequired,
};

export default QuizCardActions;
