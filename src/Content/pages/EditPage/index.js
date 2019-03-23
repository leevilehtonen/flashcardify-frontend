import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grow, Fade } from '@material-ui/core';
import { getQuiz, getFlashcardsForQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import EditPageContent from './EditPageContent';

const EditPage = ({ history, match }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async () => {
    const result = await Promise.all([
      getQuiz(match.params.id),
      getFlashcardsForQuiz(match.params.id),
    ]);
    setQuiz({ ...result[0], flashcards: result[1] });
    setFetching(false);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <FadeWrapperPage
      Component={EditPageContent}
      ProgressTransition={Fade}
      ContentTransition={Grow}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      redirect={path => history.push(path)}
      quiz={quiz}
    />
  );
};

EditPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default EditPage;
