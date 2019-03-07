import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Zoom } from '@material-ui/core';
import QuizCard from '../../common/QuizCard';

const CollectionsPage = ({ redirect, quizzes }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const actions = id => [
    {
      name: 'Open',
      color: 'primary',
      variant: 'contained',
      fullWidth: true,
      action: () => {
        redirect(`/view/${id}`);
      },
    },
  ];

  return (
    <Grid container justify="flex-start" spacing={3}>
      {quizzes.map((quiz, id) => (
        <Grid key={quiz.id} item xs={12} sm={6} lg={4} xl={3}>
          <Zoom in={visible} style={{ transitionDelay: `${id * 5}0ms` }}>
            <div>
              <QuizCard quiz={quiz} actions={actions(quiz.id)} />
            </div>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
};

CollectionsPage.propTypes = {
  redirect: PropTypes.func.isRequired,
  quizzes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CollectionsPage;
