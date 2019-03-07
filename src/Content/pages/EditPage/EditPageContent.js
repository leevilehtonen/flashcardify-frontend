import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { updateQuiz } from '../../../services/quizzes';
import QuizForm from '../../common/QuizForm';

const EditPageContent = ({ redirect, quiz, enqueueSnackbar }) => {
  const [flashcards, setFlashcards] = useState(quiz.flashcards);
  const [title, setTitle] = useState(quiz.title);
  const [description, setDescription] = useState(quiz.description);
  const [saving, setSaving] = useState(false);

  const submitForm = async () => {
    setSaving(true);
    const result = await updateQuiz(quiz.id, { title, description, flashcards });
    enqueueSnackbar(`Quiz "${result.title}" updated`);
    setSaving(false);
    setTimeout(() => redirect('/collections'), 1000);
  };

  return (
    <QuizForm
      flashcards={flashcards}
      title={title}
      description={description}
      setFlashcards={setFlashcards}
      setTitle={setTitle}
      setDescription={setDescription}
      saving={saving}
      submitText="Update"
      submitForm={submitForm}
      cardTitle="Update a quiz"
    />
  );
};

EditPageContent.propTypes = {
  quiz: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};
export default withSnackbar(EditPageContent);
