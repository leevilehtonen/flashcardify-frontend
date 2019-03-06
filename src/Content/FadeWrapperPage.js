import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  progressWrapper: {},
  contentWrapper: {},
});

const FadeWrapperPage = ({ classes, fetching, timeout }) => {
  const [progressVisible, setProgressVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (fetching) {
      setContentVisible(false);
      setTimeout(() => {
        setProgressVisible(true);
      }, timeout);
    } else {
      setProgressVisible(false);
      setTimeout(() => {
        setContentVisible(true);
      }, timeout);
    }
  }, [fetching]);

  return (
    <div className={classes.root}>
      {progressVisible && (
        <div className={classes.progressWrapper}>
          <Fade in={progressVisible} timeout={timeout}>
            <p>Hello</p>
          </Fade>
        </div>
      )}
      {contentVisible && (
        <div className={classes.contentWrapper}>
          <Fade in={contentVisible} timeout={timeout}>
            <p>World</p>
          </Fade>
        </div>
      )}
    </div>
  );
};

FadeWrapperPage.propTypes = {};

export default withStyles(styles)(FadeWrapperPage);
