import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentComponentWrapper: {
    margin: theme.spacing(3),
  },
});

const FadeWrapperPage = ({
  classes,
  fetching,
  timeout,
  ProgressTransition,
  ContentTransition,
  Component,
  ...props
}) => {
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
  });

  return (
    <div className={classes.root}>
      <div className={classes.progressWrapper}>
        <ProgressTransition in={progressVisible} mountOnEnter unmountOnExit timeout={timeout}>
          <CircularProgress />
        </ProgressTransition>
      </div>
      <div className={classes.contentWrapper}>
        <ContentTransition in={contentVisible} mountOnEnter unmountOnExit timeout={timeout}>
          <div className={classes.contentComponentWrapper}>
            <Component {...props} />
          </div>
        </ContentTransition>
      </div>
    </div>
  );
};

FadeWrapperPage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  timeout: PropTypes.number.isRequired,
  ProgressTransition: PropTypes.func.isRequired,
  ContentTransition: PropTypes.func.isRequired,
  Component: PropTypes.func.isRequired,
};

export default withStyles(styles)(FadeWrapperPage);
