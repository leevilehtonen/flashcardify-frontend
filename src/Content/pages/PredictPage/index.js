import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { getQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import PredictPageContent from './PredictPageContent';

const PredictPage = ({ match, history }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async () => {
    const result = await getQuiz(match.params.id, true);
    setQuiz(result);
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
