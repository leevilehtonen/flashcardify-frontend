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

const ViewStatistics = ({ classes, tries, dones, difficulty }) => (
  <div className={classes.root}>
    <Person />
    <Typography variant="body2" className={classes.text}>
      {tries}
    </Typography>
    <Done />
    <Typography variant="body2" className={classes.text}>
      {dones}
    </Typography>
    <SignalCellular2Bar />
    <Typography variant="body2" className={classes.text}>
      {difficulty}
    </Typography>
  </div>
);

ViewStatistics.propTypes = {
  tries: PropTypes.number.isRequired,
  dones: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewStatistics);
