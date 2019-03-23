import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade, Grow } from '@material-ui/core';
import { getQuiz, getRatingStatsForQuiz, getFlashcardsForQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import ViewPageContent from './ViewPageContent';
import { importImage } from '../../../misc/utils';

const ViewPage = ({ history, match }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async () => {
    const result = await Promise.all([
      getQuiz(match.params.id),
      getRatingStatsForQuiz(match.params.id, 'AVG'),
      getRatingStatsForQuiz(match.params.id, 'COUNT'),
    ]);
    const imageSrc = await importImage(result[0].image);
    setQuiz({
      ...result[0],
      rating: Number(result[1].value),
      ratings: Number(result[2].value),
      image: imageSrc,
    });
    setFetching(false);
  };

  const fetchFlashcards = async () => {
    const result = await getFlashcardsForQuiz(match.params.id);
    setQuiz(Object.assign({}, quiz, { flashcards: result }));
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <FadeWrapperPage
      Component={ViewPageContent}
      ProgressTransition={Fade}
      ContentTransition={Grow}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      redirect={path => history.push(path)}
      fetchFlashcards={fetchFlashcards}
      quiz={quiz}
    />
  );
};
ViewPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ViewPage;
