import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grow, Fade } from '@material-ui/core';
import { getQuiz } from '../../../services/quizzes';
import FadeWrapperPage from '../../FadeWrapperPage';
import EditPageContent from './EditPageContent';

const EditPage = ({ history, match }) => {
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
