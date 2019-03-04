import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import QuizCardActions from '../../common/QuizCardActions';
import QuizCardContent from '../../common/QuizCardContent';
import QuizCardMedia from '../../common/QuizCardMedia';

const CollectionCard = ({ quiz: { id, title, description }, redirect }) => {
  const actions = [
    {
      name: 'Start',
      color: 'secondary',
      action: () => {
        console.log('Start');
      },
    },
    {
      name: 'Edit',
      color: 'primary',
      action: () => {
        redirect(`/edit/${id}`);
      },
    },
    {
      name: 'Delete',
      color: 'primary',
      action: () => {
        console.log('Delete');
      },
    },
  ];

  return (
    <Card>
      <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
      <QuizCardContent title={title} description={description} />
      <QuizCardActions actions={actions} />
    </Card>
  );
};

CollectionCard.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  redirect: PropTypes.func.isRequired,
};
export default CollectionCard;
