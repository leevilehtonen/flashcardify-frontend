import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import DisplayCard from './DisplayCard';
import InputCard from './InputCard';
import mockData from '../../../flashcards.json';
import PredictionStatus from './PredictionStatus';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
};

const PredictPage = ({ classes }) => {
  const [predictionStatus, setPredictionStatus] = useState(PredictionStatus.ORIGINAL);
  const [flashcardId, setFlashcardId] = useState(0);
  const [data] = useState(mockData);

  const forwardPredictionStatus = () => {
    setPredictionStatus(prevPredictionStatus => {
      if (prevPredictionStatus === PredictionStatus.ORIGINAL) {
        return PredictionStatus.ANSWER;
      }
      setFlashcardId(prevFlashcardId => prevFlashcardId + 1);
      return PredictionStatus.ORIGINAL;
    });
  };

  useEffect(() => {
    const pred = setInterval(() => forwardPredictionStatus(predictionStatus), 5000);
    return () => {
      window.clearInterval(pred);
    };
  }, []);

  return (
    <div className={classes.root}>
      <DisplayCard predictionStatus={predictionStatus} flashcard={data[flashcardId]} />
      <InputCard />
    </div>
  );
};

PredictPage.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(PredictPage);
