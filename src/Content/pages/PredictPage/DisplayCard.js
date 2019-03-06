import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import posed from 'react-pose';
import PredictionStatus from './PredictionStatus';
import AnimationStatus from './AnimationStatus';

const styles = {
  container: {
    marginBottom: 'auto',
    marginTop: 'auto',
    width: '70vmin',
    height: '65vmin',
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
};

const Box = posed.div({
  [AnimationStatus.ENTER]: {
    rotateY: 0,
    opacity: 1,
    scale: 0.01,
    transition: {
      duration: 0,
    },
  },
  [AnimationStatus.EXIT]: {
    rotateY: 0,
    opacity: 0,
    scale: 2,
    transition: {
      duration: 600,
    },
  },
  [AnimationStatus.SHOW_ORIGINAL]: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 600,
    },
  },
  [AnimationStatus.HIDE_ORIGINAL]: {
    rotateY: 90,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
  [AnimationStatus.SWAP]: {
    rotateY: -90,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0,
      ease: 'linear',
    },
  },
  [AnimationStatus.SHOW_ANSWER]: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
});

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationStatus: AnimationStatus.ENTER,
    };
  }

  componentDidMount() {
    this.setState({ animationStatus: AnimationStatus.SHOW_ORIGINAL });
  }

  onPoseComplete = () => {
    this.setState(prevState => {
      const { animationStatus } = prevState;

      switch (animationStatus) {
        case AnimationStatus.ENTER:
          return { animationStatus: AnimationStatus.SHOW_ORIGINAL };
        case AnimationStatus.EXIT:
          return { animationStatus: AnimationStatus.ENTER };
        case AnimationStatus.HIDE_ORIGINAL:
          return { animationStatus: AnimationStatus.SWAP };
        case AnimationStatus.SWAP:
          return { animationStatus: AnimationStatus.SHOW_ANSWER };
        default:
          return {};
      }
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.predictionStatus === PredictionStatus.ANSWER &&
      prevState.animationStatus === AnimationStatus.SHOW_ORIGINAL
    ) {
      return { animationStatus: AnimationStatus.HIDE_ORIGINAL };
    }
    if (
      nextProps.predictionStatus === PredictionStatus.ORIGINAL &&
      prevState.animationStatus === AnimationStatus.SHOW_ANSWER
    ) {
      return { animationStatus: AnimationStatus.EXIT };
    }
    return null;
  }

  render() {
    const {
      classes,
      flashcard: { question, answer },
    } = this.props;
    const { animationStatus } = this.state;
    return (
      <Box
        className={classes.container}
        pose={animationStatus}
        onPoseComplete={this.onPoseComplete}
      >
        <Card
          className={classNames(classes.card, {
            [classes.correctCard]: animationStatus === AnimationStatus.SHOW_ANSWER,
          })}
        >
          <CardContent className={classes.cardContent}>
            <Typography className={classes.text} variant="h5" align="center" gutterBottom>
              {animationStatus === AnimationStatus.SHOW_ANSWER ? answer : ''}
              {animationStatus === AnimationStatus.ENTER ||
              animationStatus === AnimationStatus.SHOW_ORIGINAL
                ? question
                : ''}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcard: PropTypes.shape({
    original: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(DisplayCard);
