import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import FadeWrapperPage from '../../FadeWrapperPage';
import CollectionsPageContent from './CollectionsPageContent';
import { getQuizzes } from '../../../services/quizzes';
import { importImages } from '../../../misc/utils';

const images = importImages();

const CollectionsPage = ({ history, contentRef }) => {
  const [fetching, setFetching] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [count, setCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const quizzesPerPage = 12;

  const fetchInitialQuizzes = async () => {
    setFetching(true);
    const results = await getQuizzes(0, quizzesPerPage);
    results[0] = results[0].map(quiz => Object.assign({}, quiz, { image: images[quiz.image] }));
    setQuizzes(results[0]);
    setCount(results[1]);
    setFetching(false);
  };

  const fetchMoreQuizzes = async () => {
    const results = await getQuizzes(nextPage, quizzesPerPage);
    results[0] = results[0].map(quiz => Object.assign({}, quiz, { image: images[quiz.image] }));
    setNextPage(nextPage + 1);
    setQuizzes(quizzes.concat(results[0]));
  };

  useEffect(() => {
    fetchInitialQuizzes();
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
      fetchMoreQuizzes={fetchMoreQuizzes}
      hasMoreQuizzes={quizzes.length < count}
      contentRef={contentRef}
      quizzesPerPage={quizzesPerPage}
    />
  );
};

CollectionsPage.propTypes = {
  history: PropTypes.object.isRequired,
  contentRef: PropTypes.object.isRequired,
};
export default CollectionsPage;
