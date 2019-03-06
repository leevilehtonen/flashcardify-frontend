import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withSnackbar } from 'notistack';
import EditForm from './EditForm';
import { getQuiz, updateQuiz } from '../../../services/quizzes';
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
const EditPage = ({ classes, history, match, enqueueSnackbar }) => {
  const [fetching, setFetching] = useState(true);
  const [quiz, setQuiz] = useState({});

  const fetchQuiz = async () => {
    setFetching(true);
    const result = await getQuiz(match.params.id, true);
    setQuiz(result);
    setFetching(false);
  };

  const saveQuiz = async (id, newQuiz) => {
    const result = await updateQuiz(id, newQuiz);
    enqueueSnackbar(`Quiz "${result.title}" updated`);
    setTimeout(() => {
      history.push('/collections');
    }, 1000);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  if (fetching) {
    return <ProgressView />;
  }

  return (
    <div className={classes.root}>
      <EditForm saveQuiz={saveQuiz} quiz={quiz} />
    </div>
  );
};

EditPage.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};
export default withStyles(styles)(withSnackbar(EditPage));
