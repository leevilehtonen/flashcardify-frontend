import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { CircularProgress, withStyles } from '@material-ui/core';
import { getQuiz, updateQuiz } from '../../../services/quizzes';
import QuizForm from '../../common/QuizForm';

const styles = {
  progressWrapper: {
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    transform: 'translate(0, -50%)',
  },
};

const EditForm = ({ id, enqueueSnackbar, redirect, classes }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchQuiz = async () => {
    setFetching(true);
    const result = await getQuiz(id);
    setFlashcards(result.flashcards);
    setTitle(result.title);
    setDescription(result.description);
    setFetching(false);
  };

  const submitForm = async () => {
    setSaving(true);
    const result = await updateQuiz(id, { title, description, flashcards });
    setSaving(false);
    enqueueSnackbar(`Quiz "${result.title}" updated`);
    redirect('/collections');
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <React.Fragment>
      {fetching ? (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <QuizForm
          flashcards={flashcards}
          title={title}
          description={description}
          setFlashcards={setFlashcards}
          setTitle={setTitle}
          setDescription={setDescription}
          saving={saving}
          submitText="Update"
          submitHandler={submitForm}
          cardTitle="Update a quiz"
        />
      )}
    </React.Fragment>
  );
};

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withSnackbar(EditForm));
