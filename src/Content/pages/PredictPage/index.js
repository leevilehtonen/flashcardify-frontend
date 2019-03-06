import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import DisplayCard from './DisplayCard';
import InputCard from './InputCard';
import mockData from '../../../flashcards.json';
import PredictionStatus from './PredictionStatus';
import { getQuiz } from '../../../services/quizzes';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const PredictPage = ({ classes, match }) => {
  const [predictionStatus, setPredictionStatus] = useState(PredictionStatus.ORIGINAL);
  const [flashcardId, setFlashcardId] = useState(0);
  const [data, setData] = useState([]);
  const [correct, setCorrect] = useState(true);
  const [input, setInput] = useState('');

  const proceed = () => {
    setPredictionStatus(prevPredictionStatus => {
      if (prevPredictionStatus === PredictionStatus.ORIGINAL) {
        return PredictionStatus.ANSWER;
      }
      setFlashcardId(prevFlashcardId => prevFlashcardId + 1);
      return PredictionStatus.ORIGINAL;
    });
  };

  const fetchQuiz = async () => {
    const result = await getQuiz(match.params.id, true);
    setData(result.flashcards);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div className={classes.root}>
      {data.length > 0 && (
        <DisplayCard
          predictionStatus={predictionStatus}
          correct={correct}
          flashcard={data[flashcardId]}
        />
      )}
      <InputCard input={input} setInput={setInput} submit={proceed} buttonText="Proceed" />
    </div>
  );
};

PredictPage.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(PredictPage);
