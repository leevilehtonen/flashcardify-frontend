import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { Grid } from '@material-ui/core';
import { createQuiz } from '../../../services/quizzes';
import QuizForm from '../../common/QuizForm';

const NewPageContent = ({ enqueueSnackbar, redirect }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState('mountains.jpg');
  const [isPublic, setIsPublic] = useState(false);
  const [saving, setSaving] = useState(false);

  const clearFrom = () => {
    setFlashcards([]);
    setTitle('');
    setDescription('');
  };

  const submitForm = async () => {
    setSaving(true);
    const result = await createQuiz({
      title,
      description,
      difficulty,
      isPublic,
      image,
      flashcards,
    });
    setSaving(false);
    enqueueSnackbar(`Quiz "${result.title}" created`);
    clearFrom();
    redirect('/collections');
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} xl={8}>
        <QuizForm
          flashcards={flashcards}
          title={title}
          description={description}
          difficulty={difficulty}
          isPublic={isPublic}
          image={image}
          setFlashcards={setFlashcards}
          setTitle={setTitle}
          setDescription={setDescription}
          setDifficulty={setDifficulty}
          setIsPublic={setIsPublic}
          setImage={setImage}
          saving={saving}
          submitText="Create"
          submitForm={submitForm}
          cardTitle="Create a new quiz"
        />
      </Grid>
    </Grid>
  );
};

NewPageContent.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};
export default withSnackbar(NewPageContent);
