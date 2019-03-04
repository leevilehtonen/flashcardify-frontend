import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import QuizCardActions from '../../common/QuizCardActions';
import QuizCardContent from '../../common/QuizCardContent';
import QuizCardMedia from '../../common/QuizCardMedia';

const CollectionCard = ({ quiz: { id, title, description }, redirect }) => {
  const actions = [
    {
      name: 'Open',
      color: 'primary',
      variant: 'contained',
      fullWidth: true,
      action: () => {
        redirect(`/view/${id}`);
      },
    },
    /*    {
      name: 'Edit',
      color: 'primary',
      variant: 'text',
      action: () => {
        redirect(`/edit/${id}`);
      },
    }, */
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
