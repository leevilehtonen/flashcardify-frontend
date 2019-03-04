import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import QuizCardActions from '../../common/QuizCardActions';
import QuizCardContent from '../../common/QuizCardContent';
import QuizCardMedia from '../../common/QuizCardMedia';
import QuizCardHeader from '../../common/QuizCardHeader';

const actions = [
  {
    name: 'Start',
    color: 'secondary',
    action: () => {
      console.log('Start');
    },
  },
  {
    name: 'Add to collection',
    color: 'primary',
    action: () => {
      console.log('Edit');
    },
  },
];

const ExploreCard = ({ quiz: { title, description, username, date } }) => (
  <Card>
    <QuizCardHeader username={username} date={moment(date, 'DD.MM.YYYY').format('LLL')} />
    <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
    <QuizCardContent title={title} description={description} />
    <QuizCardActions actions={actions} />
  </Card>
);

ExploreCard.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreCard;
