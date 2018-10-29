import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const QuizCardContent = ({ title, description }) => (
  <CardContent>
    <Typography gutterBottom variant="headline" component="h2">
      {title}
    </Typography>
    <Typography component="p">{description}</Typography>
  </CardContent>
);

export default QuizCardContent;
