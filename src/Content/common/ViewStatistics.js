import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import {
  Person,
  Done,
  SignalCellular0Bar,
  SignalCellular1Bar,
  SignalCellular2Bar,
  SignalCellular3Bar,
  SignalCellular4Bar,
} from '@material-ui/icons';
import Difficulty from '../../misc/Difficulty';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  text: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
  },
});

const ViewStatistics = ({ classes, quiz: { tries, successes, difficulty } }) => {
  const getDifficultyIcon = () => {
    switch (difficulty) {
      case Difficulty.TRIVIAL:
        return <SignalCellular0Bar />;
      case Difficulty.EASY:
        return <SignalCellular1Bar />;
      case Difficulty.MEDIUM:
        return <SignalCellular2Bar />;
      case Difficulty.HARD:
        return <SignalCellular3Bar />;
      case Difficulty.IMPOSSIBLE:
        return <SignalCellular4Bar />;
      default:
        return <SignalCellular0Bar />;
    }
  };

  return (
    <div className={classes.root}>
      <Person />
      <Typography variant="body2" className={classes.text}>
        {tries}
      </Typography>
      <Done />
      <Typography variant="body2" className={classes.text}>
        {successes}
      </Typography>
      {getDifficultyIcon()}
      <Typography variant="body2" className={classes.text}>
        {difficulty}
      </Typography>
    </div>
  );
};

ViewStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.shape({
    tries: PropTypes.number.isRequired,
    successes: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ViewStatistics);
