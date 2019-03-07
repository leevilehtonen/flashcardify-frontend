import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import QuizCardMedia from './QuizCardMedia';
import QuizCardContent from './QuizCardContent';
import QuizCardActions from './QuizCardActions';

const QuizCard = ({ quiz, actions }) => {
  return (
    <Card>
      <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
      <QuizCardContent title={quiz.title} description={quiz.description} />
      <QuizCardActions actions={actions} />
    </Card>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default QuizCard;
