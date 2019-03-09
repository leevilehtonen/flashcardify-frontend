import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import QuizCardMedia from './QuizCardMedia';
import QuizCardContent from './QuizCardContent';
import QuizCardActions from './QuizCardActions';
import QuizCardHeader from './QuizCardHeader';

const QuizCard = ({ quiz, actions, header }) => {
  return (
    <Card>
      {header && <QuizCardHeader username={quiz.title} date={quiz.updated} />}
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
  header: PropTypes.bool,
};

QuizCard.defaultProps = {
  header: false,
};

export default QuizCard;
