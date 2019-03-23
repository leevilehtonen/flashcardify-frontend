import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { getQuiz, updateQuizTries, getFlashcardsForQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import PredictPageContent from './PredictPageContent';

const PredictPage = ({ match, history }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async () => {
    const result = await Promise.all([
      getQuiz(match.params.id),
      getFlashcardsForQuiz(match.params.id),
      updateQuizTries(match.params.id),
    ]);
    setQuiz({ ...result[0], flashcards: result[1] });
    setFetching(false);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <FadeWrapperPage
      Component={PredictPageContent}
      ProgressTransition={Fade}
      ContentTransition={Fade}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      quiz={quiz}
      redirect={path => history.push(path)}
    />
  );
};

PredictPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default PredictPage;
