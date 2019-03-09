import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import FadeWrapperPage from '../../FadeWrapperPage';
import ExplorePageContent from './ExplorePageContent';
import { getQuizzes } from '../../../services/quizzes';

const ExplorePage = ({ history, contentRef }) => {
  const [fetching, setFetching] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [count, setCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const quizzesPerPage = 12;

  const fetchInitialQuizzes = async () => {
    setFetching(true);
    const results = await getQuizzes(0, quizzesPerPage);
    setQuizzes(results.quizzes);
    setCount(results.count);
    setFetching(false);
  };

  const fetchMoreQuizzes = async () => {
    const results = await getQuizzes(nextPage, quizzesPerPage);
    setNextPage(nextPage + 1);
    setQuizzes(quizzes.concat(results.quizzes));
  };

  useEffect(() => {
    fetchInitialQuizzes();
  }, []);

  return (
    <FadeWrapperPage
      Component={ExplorePageContent}
      ProgressTransition={Fade}
      ContentTransition={Fade}
      fetching={fetching}
      setFetching={setFetching}
      timeout={300}
      redirect={path => history.push(path)}
      quizzes={quizzes}
      fetchMoreQuizzes={fetchMoreQuizzes}
      hasMoreQuizzes={quizzes.length < count}
      contentRef={contentRef}
      quizzesPerPage={quizzesPerPage}
    />
  );
};

ExplorePage.propTypes = {
  history: PropTypes.object.isRequired,
  contentRef: PropTypes.object.isRequired,
};
export default ExplorePage;
