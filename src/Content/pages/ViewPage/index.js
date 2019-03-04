import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getQuiz } from '../../../services/quizzes';
import ViewCard from './ViewCard';
import ProgressView from '../../common/ProgressView';

const ViewPage = ({ history, match }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const navigate = path => {
    history.push(path);
  };

  const fetchQuiz = async flashcards => {
    const result = await getQuiz(match.params.id, flashcards);
    setQuiz(result);
    setFetching(false);
  };

  useEffect(() => {
    setFetching(true);
    fetchQuiz(false);
  }, []);

  return (
    <div>
      {fetching ? (
        <ProgressView />
      ) : (
        <ViewCard quiz={quiz} fetchFlashcards={() => fetchQuiz(true)} navigate={navigate} />
      )}
    </div>
  );
};
ViewPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ViewPage;
