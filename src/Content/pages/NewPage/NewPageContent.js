import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { createQuiz } from '../../../services/quizzes';
import QuizForm from '../../common/QuizForm';

const NewPageContent = ({ enqueueSnackbar, redirect }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
      flashcards: flashcards.map(({ id, ...fields }) => ({ ...fields })),
    });
    setSaving(false);
    enqueueSnackbar(`Quiz "${result.title}" created`);
    clearFrom();
    redirect('/collections');
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
      submitText="Create"
      submitForm={submitForm}
      cardTitle="Create a new quiz"
    />
  );
};

NewPageContent.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};
export default withSnackbar(NewPageContent);
