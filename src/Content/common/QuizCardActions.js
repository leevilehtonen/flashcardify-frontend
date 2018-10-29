import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const QuizCardActions = ({ props }) => (
  <CardActions>
    <Button size="small" color="secondary">
      Start
    </Button>
    <Button size="small" color="primary">
      Edit
    </Button>
    <Button size="small" color="primary">
      Delete
    </Button>
  </CardActions>
);

export default QuizCardActions;
