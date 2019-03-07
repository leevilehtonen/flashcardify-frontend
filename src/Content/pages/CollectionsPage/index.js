import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import FadeWrapperPage from '../../FadeWrapperPage';
import CollectionsPageContent from './CollectionsPageContent';
import { getQuizzes } from '../../../services/quizzes';

const CollectionsPage = ({ history }) => {
  const [fetching, setFetching] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    const result = await getQuizzes();
    setQuizzes(result);
    setFetching(false);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <FadeWrapperPage
      Component={CollectionsPageContent}
      ProgressTransition={Fade}
      ContentTransition={Fade}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      redirect={path => history.push(path)}
      quizzes={quizzes}
    />
  );
};

CollectionsPage.propTypes = {
  history: PropTypes.object.isRequired,
};
export default CollectionsPage;
