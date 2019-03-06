import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress, Fade } from '@material-ui/core';

const styles = theme => ({
  progressWrapper: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing(3),
  },
});
const ProgressView = ({ classes, page }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fader = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => {
      setVisible(false);
      window.clearTimeout(fader);
    };
  }, []);

  if (!page) {
    return (
      <Fade in={visible} timeout={1000}>
        <CircularProgress className={classes.progress} />
      </Fade>
    );
  }

  return (
    <div className={classes.progressWrapper}>
      <Fade in={visible} timeout={1000}>
        <CircularProgress className={classes.progress} />
      </Fade>
    </div>
  );
};

ProgressView.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.bool,
};

ProgressView.defaultProps = {
  page: true,
};

export default withStyles(styles)(ProgressView);
