import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../../common/QuizForm';

const EditForm = ({ quiz, saveQuiz }) => {
  const [flashcards, setFlashcards] = useState(quiz.flashcards);
  const [title, setTitle] = useState(quiz.title);
  const [description, setDescription] = useState(quiz.description);
  const [saving, setSaving] = useState(false);

  const submitForm = async () => {
    setSaving(true);
    await saveQuiz(quiz.id, { title, description, flashcards });
    setSaving(false);
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
      submitHandler={submitForm}
      cardTitle="Update a quiz"
    />
  );
};

EditForm.propTypes = {
  quiz: PropTypes.object.isRequired,
  saveQuiz: PropTypes.func.isRequired,
};
export default EditForm;
