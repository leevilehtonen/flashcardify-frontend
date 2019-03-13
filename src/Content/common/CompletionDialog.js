import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  withStyles,
  DialogActions,
  DialogContentText,
  Button,
  withMobileDialog,
  Typography,
} from '@material-ui/core';
import RatingPicker from './RatingPicker';

const styles = theme => ({
  text: {
    marginBottom: theme.spacing(1),
  },
  content: {
    textAlign: 'center',
  },
  score: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: theme.spacing(3),
  },
});

const CompletionDialog = ({
  classes,
  quiz,
  open,
  setOpen,
  fullScreen,
  quit,
  tryAgain,
  points,
  submitRating,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-completion"
      fullScreen={fullScreen}
    >
      <DialogTitle id="form-dialog-title" style={{ textAlign: fullScreen ? 'center' : '' }}>
        Completed
      </DialogTitle>
      <DialogContent className={classes.content} style={{ marginTop: fullScreen ? '50%' : '' }}>
        <DialogContentText className={classes.text}>
          You have completed <b>{quiz.title}</b> -quiz with points
        </DialogContentText>
        <Typography className={classes.score} variant="h2">
          {points}/{quiz.flashcards.length}
        </Typography>
        <DialogContentText className={classes.text}>
          Please rate the quiz based on your experience
        </DialogContentText>
        <RatingPicker submitRating={submitRating} />
      </DialogContent>
      <DialogActions>
        <Button onClick={quit} color="primary">
          Quit
        </Button>
        <Button onClick={tryAgain} color="primary">
          Try again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CompletionDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  quit: PropTypes.func.isRequired,
  tryAgain: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  submitRating: PropTypes.func.isRequired,
};

export default withStyles(styles)(withMobileDialog({ breakpoint: 'xs' })(CompletionDialog));
