import React from 'react';
import Card from '@material-ui/core/Card';
import QuizCardActions from '../../common/QuizCardActions';
import QuizCardContent from '../../common/QuizCardContent';
import QuizCardMedia from '../../common/QuizCardMedia';

const CollectionCard = ({ quiz: { title, description } }) => (
  <Card>
    <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
    <QuizCardContent title={title} description={description} />
    <QuizCardActions />
  </Card>
);

export default CollectionCard;
