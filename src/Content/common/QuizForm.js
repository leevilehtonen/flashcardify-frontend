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
  difficulty,
  setDifficulty,
  isPublic,
  setIsPublic,
  image,
  setImage,
  saving,
  submitText,
  submitForm,
  cardTitle,
}) => {
  const isValid = () => {
    if (title.length === 0) {
      return false;
    }
    if (description.length === 0) {
      return false;
    }
    if (flashcards.length === 0) {
      return false;
    }
    if (difficulty.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div className={classes.root}>
      <QuizFormDetails
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        image={image}
        setImage={setImage}
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
              disabled={saving || !isValid()}
              onClick={() => submitForm()}
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
  difficulty: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  setFlashcards: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  setIsPublic: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  submitText: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  cardTitle: PropTypes.string.isRequired,
};
export default withStyles(styles)(QuizForm);
