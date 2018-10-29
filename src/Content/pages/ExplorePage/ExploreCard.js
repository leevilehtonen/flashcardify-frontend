import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import QuizCardActions from '../../common/QuizCardActions';
import QuizCardContent from '../../common/QuizCardContent';
import QuizCardMedia from '../../common/QuizCardMedia';
import QuizCardHeader from '../../common/QuizCardHeader';

const ExploreCard = ({ quiz: { title, description, username, date } }) => (
  <Card>
    <QuizCardHeader username={username} date={moment(date, 'DD.MM.YYYY').format('LLL')} />
    <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
    <QuizCardContent title={title} description={description} />
    <QuizCardActions />
  </Card>
);

export default ExploreCard;
