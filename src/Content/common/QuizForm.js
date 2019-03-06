import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, Grid, CircularProgress } from '@material-ui/core';
import QuizFormFlashcards from './QuizFormFlashcards';
import QuizFormDetails from './QuizFormDetails';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});
const QuizForm = ({
  classes,
  flashcards,
  setFlashcards,
  title,
  setTitle,
  description,
  setDescription,
  saving,
  submitText,
  submitHandler,
  cardTitle,
}) => {
  return (
    <div className={classes.root}>
      <QuizFormDetails
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        cardTitle={cardTitle}
      />
      <QuizFormFlashcards flashcards={flashcards} setFlashcards={setFlashcards} />
      <Grid className={classes.grid} container spacing={1} justify="flex-end">
        <Grid item>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              disabled={
                saving || title.length === 0 || description.length === 0 || flashcards.length === 0
              }
              onClick={() => submitHandler()}
            >
              {submitText}
            </Button>

            {saving && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

QuizForm.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setFlashcards: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  submitText: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  cardTitle: PropTypes.string.isRequired,
};
export default withStyles(styles)(QuizForm);
