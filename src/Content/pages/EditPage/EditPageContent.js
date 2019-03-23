import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { Grid } from '@material-ui/core';
import { updateQuiz } from '../../../services/quizzes';
import QuizForm from '../../common/QuizForm';

const EditPageContent = ({ redirect, quiz, enqueueSnackbar }) => {
  const [flashcards, setFlashcards] = useState(quiz.flashcards);
  const [title, setTitle] = useState(quiz.title);
  const [difficulty, setDifficulty] = useState(quiz.difficulty);
  const [description, setDescription] = useState(quiz.description);
  const [isPublic, setIsPublic] = useState(quiz.isPublic);
  const [image, setImage] = useState(quiz.image);
  const [saving, setSaving] = useState(false);

  const submitForm = async () => {
    setSaving(true);
    const result = await updateQuiz(quiz.id, {
      title,
      description,
      flashcards,
      difficulty,
      isPublic,
      image,
    });
    enqueueSnackbar(`Quiz "${result.title}" updated`);
    setSaving(false);
    setTimeout(() => redirect('/collections'), 1000);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} lg={8} xl={6}>
        <QuizForm
          flashcards={flashcards}
          title={title}
          description={description}
          difficulty={difficulty}
          image={image}
          isPublic={isPublic}
          setFlashcards={setFlashcards}
          setTitle={setTitle}
          setDescription={setDescription}
          setDifficulty={setDifficulty}
          setIsPublic={setIsPublic}
          setImage={setImage}
          saving={saving}
          submitText="Update"
          submitForm={submitForm}
          cardTitle="Update a quiz"
        />
      </Grid>
    </Grid>
  );
};

EditPageContent.propTypes = {
  quiz: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};
export default withSnackbar(EditPageContent);
