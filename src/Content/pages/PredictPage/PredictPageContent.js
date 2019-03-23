import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withSnackbar } from 'notistack';
import DisplayCard from './DisplayCard';
import InputCard from './InputCard';
import CompletionDialog from '../../common/CompletionDialog';
import PredictionStatus from './PredictionStatus';
import {
  updateQuizSuccesses,
  updateQuizTries,
  createRatingForQuiz,
} from '../../../services/quizzes';

const styles = {
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
};

const PredictPageContent = ({ quiz, classes, redirect }) => {
  const [predictionStatus, setPredictionStatus] = useState(PredictionStatus.QUESTION);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correct, setCorrect] = useState(true);
  const [points, setPoints] = useState(0);
  const [input, setInput] = useState('');
  const [completionDialogOpen, setCompletionDialogOpen] = useState(false);

  const checkIfCorrect = () => {
    const result =
      quiz.flashcards[questionNumber].answer.toLowerCase().trim() === input.toLowerCase();
    setCorrect(result);
    if (result) {
      setPoints(points + 1);
    }
  };

  const isLastFlashcard = () => quiz.flashcards.length - 1 === questionNumber;

  const nextFlashcard = () => {
    setInput('');
    setPredictionStatus(PredictionStatus.QUESTION);
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
    }, 300);
  };

  const completionDialogQuit = () => {
    setCompletionDialogOpen(false);
    redirect('/collections');
  };

  const completionDialogTryAgain = () => {
    setCompletionDialogOpen(false);
    updateQuizTries(quiz.id);
    setTimeout(() => {
      setPredictionStatus(PredictionStatus.QUESTION);
      setQuestionNumber(0);
      setInput('');
      setCorrect(true);
      setPoints(0);
    }, 300);
  };

  const submitForm = () => {
    if (predictionStatus === PredictionStatus.QUESTION) {
      checkIfCorrect();
      setPredictionStatus(PredictionStatus.ANSWER);
    } else if (isLastFlashcard()) {
      setCompletionDialogOpen(true);
      updateQuizSuccesses(quiz.id);
    } else {
      nextFlashcard();
    }
  };

  const submitRating = async rating => {
    await createRatingForQuiz(quiz.id, rating);
  };

  return (
    <div className={classes.root}>
      <DisplayCard
        predictionStatus={predictionStatus}
        correct={correct}
        flashcard={quiz.flashcards[questionNumber]}
      />
      <InputCard
        input={input}
        setInput={setInput}
        submitForm={submitForm}
        predictionStatus={predictionStatus}
      />
      <CompletionDialog
        quiz={quiz}
        open={completionDialogOpen}
        setOpen={setCompletionDialogOpen}
        quit={completionDialogQuit}
        tryAgain={completionDialogTryAgain}
        points={points}
        submitRating={submitRating}
      />
    </div>
  );
};

PredictPageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  redirect: PropTypes.func.isRequired,
  // enqueueSnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(withSnackbar(PredictPageContent));
