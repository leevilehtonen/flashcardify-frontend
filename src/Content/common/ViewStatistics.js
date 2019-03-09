import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { Person, Done, SignalCellular2Bar } from '@material-ui/icons';

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

const ViewStatistics = ({ classes, quiz: { tries, successes, difficulty } }) => (
  <div className={classes.root}>
    <Person />
    <Typography variant="body2" className={classes.text}>
      {tries}
    </Typography>
    <Done />
    <Typography variant="body2" className={classes.text}>
      {successes}
    </Typography>
    <SignalCellular2Bar />
    <Typography variant="body2" className={classes.text}>
      {difficulty}
    </Typography>
  </div>
);

ViewStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.shape({
    tries: PropTypes.number.isRequired,
    successes: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ViewStatistics);
