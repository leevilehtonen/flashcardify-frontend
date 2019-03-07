import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import DisplayCard from './DisplayCard';
import InputCard from './InputCard';
import PredictionStatus from './PredictionStatus';

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
  },
};

const PredictPageContent = ({ quiz, classes }) => {
  const [predictionStatus, setPredictionStatus] = useState(PredictionStatus.QUESTION);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correct, setCorrect] = useState(true);
  const [input, setInput] = useState('');

  const submitForm = () => {
    if (predictionStatus === PredictionStatus.QUESTION) {
      setCorrect(
        quiz.flashcards[questionNumber].answer.toLowerCase().trim() === input.toLowerCase().trim()
      );
      setPredictionStatus(PredictionStatus.ANSWER);
    } else {
      setInput('');
      setPredictionStatus(PredictionStatus.QUESTION);
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
      }, 600);
    }
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
        buttonText={predictionStatus === PredictionStatus.QUESTION ? 'Submit' : 'Next'}
      />
    </div>
  );
};

PredictPageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
};

export default withStyles(styles)(PredictPageContent);
