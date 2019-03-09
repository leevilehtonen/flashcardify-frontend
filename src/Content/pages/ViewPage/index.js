import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade, Grow } from '@material-ui/core';
import { getQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import ViewPageContent from './ViewPageContent';

const ViewPage = ({ history, match }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async fetchFlashcards => {
    const result = await getQuiz(match.params.id, fetchFlashcards);
    setQuiz(result);
    setFetching(false);
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
      fetchQuiz={fetchQuiz}
      quiz={quiz}
    />
  );
};
ViewPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ViewPage;
