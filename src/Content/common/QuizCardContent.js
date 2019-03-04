import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const QuizCardContent = ({ title, description }) => (
  <CardContent>
    <Typography gutterBottom variant="h5">
      {title}
    </Typography>
    <Typography>{description}</Typography>
  </CardContent>
);

export default QuizCardContent;
