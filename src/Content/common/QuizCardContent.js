import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const QuizCardContent = ({ title, description, maxDescription }) => (
  <CardContent>
    <Typography gutterBottom variant="h5">
      {title}
    </Typography>
    <Typography>
      {description.length > maxDescription
        ? `${description.substring(0, maxDescription).trim()}...`
        : description.trim()}
    </Typography>
  </CardContent>
);

QuizCardContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  maxDescription: PropTypes.number,
};

QuizCardContent.defaultProps = {
  maxDescription: 100,
};

export default QuizCardContent;
