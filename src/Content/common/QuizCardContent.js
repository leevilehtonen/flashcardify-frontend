import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Public } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';

const QuizCardContent = ({ title, description, maxDescription, isPublic }) => (
  <CardContent>
    <Typography gutterBottom variant="h5">
      {title}{' '}
      {isPublic ? (
        <Tooltip title="Public" placement="right">
          <Public color="action" />
        </Tooltip>
      ) : (
        ''
      )}
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
  isPublic: PropTypes.bool.isRequired,
  maxDescription: PropTypes.number,
};

QuizCardContent.defaultProps = {
  maxDescription: 100,
};

export default QuizCardContent;
