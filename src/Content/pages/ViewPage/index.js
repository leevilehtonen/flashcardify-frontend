import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { getQuiz } from '../../../services/quizzes';
import ViewCard from './ViewCard';
import ProgressView from '../../common/ProgressView';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: theme.spacing(3),
  },
});

const ViewPage = ({ history, match, classes }) => {
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

  if (fetching) {
    return <ProgressView />;
  }
  return (
    <div className={classes.root}>
      <ViewCard quiz={quiz} fetchFlashcards={() => fetchQuiz(true)} navigate={navigate} />
    </div>
  );
};
ViewPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewPage);
