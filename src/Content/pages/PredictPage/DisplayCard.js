import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import Animation from './Animation';
import PredictionStatus from './PredictionStatus';
import AnimationStatus from './AnimationStatus';

const styles = theme => ({
  container: {
    width: '70vmin',
    height: '65%',
    marginBottom: 'auto',
    marginTop: theme.spacing(4),
  },
  card: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  correctCard: {
    backgroundColor: green.A400,
  },
  incorrectCard: {
    backgroundColor: red.A100,
  },
  cardContent: {
    margin: 'auto',
  },
  text: {
    fontSize: '2.5vmax',
    textAlign: 'center',
  },
});

const DisplayCard = ({ classes, predictionStatus, flashcard, correct }) => {
  const [animationStatus, setAnimationStatus] = useState(AnimationStatus.ENTER);

  useEffect(() => {
    setAnimationStatus(AnimationStatus.SHOW_QUESTION);
  }, []);

  useEffect(() => {
    if (
      predictionStatus === PredictionStatus.ANSWER &&
      animationStatus === AnimationStatus.SHOW_QUESTION
    ) {
      setAnimationStatus(AnimationStatus.HIDE_QUESTION);
    } else if (
      predictionStatus === PredictionStatus.QUESTION &&
      animationStatus === AnimationStatus.SHOW_ANSWER
    ) {
      setAnimationStatus(AnimationStatus.EXIT);
    }
  }, [predictionStatus]);

  const onPoseComplete = () => {
    switch (animationStatus) {
      case AnimationStatus.ENTER:
        setAnimationStatus(AnimationStatus.SHOW_QUESTION);
        break;
      case AnimationStatus.EXIT:
        setAnimationStatus(AnimationStatus.ENTER);
        break;
      case AnimationStatus.HIDE_QUESTION:
        setAnimationStatus(AnimationStatus.SWAP);
        break;
      case AnimationStatus.SWAP:
        setAnimationStatus(AnimationStatus.SHOW_ANSWER);
        break;
      default:
    }
  };

  const getCardText = () => {
    if (animationStatus === AnimationStatus.SHOW_ANSWER) {
      return flashcard.answer;
    }
    if (
      animationStatus === AnimationStatus.SHOW_QUESTION ||
      animationStatus === AnimationStatus.ENTER ||
      animationStatus === AnimationStatus.HIDE_QUESTION
    ) {
      return flashcard.question;
    }
    return '';
  };

  return (
    <Animation className={classes.container} pose={animationStatus} onPoseComplete={onPoseComplete}>
      <Card
        className={classNames(classes.card, {
          [classes.correctCard]: animationStatus === AnimationStatus.SHOW_ANSWER && correct,
          [classes.incorrectCard]: animationStatus === AnimationStatus.SHOW_ANSWER && !correct,
        })}
      >
        <CardContent className={classes.cardContent}>
          <Typography className={classes.text} variant="h5" align="center" gutterBottom>
            {getCardText()}
          </Typography>
        </CardContent>
      </Card>
    </Animation>
  );
};

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  correct: PropTypes.bool.isRequired,
  predictionStatus: PropTypes.string.isRequired,
};

export default withStyles(styles)(DisplayCard);
