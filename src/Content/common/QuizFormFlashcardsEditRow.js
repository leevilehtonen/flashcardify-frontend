import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, TextField, withStyles } from '@material-ui/core';
import { Save } from '@material-ui/icons';

const styles = () => ({
  textField: {
    width: '100%',
  },
  button: {
    marginLeft: 'auto',
  },
});

const QuizFormFlashcardsEditRow = ({ classes, flashcard, handleSaveClick }) => {
  const [newQuestion, setNewQuestion] = useState(flashcard.question);
  const [newAnswer, setNewAnswer] = useState(flashcard.answer);

  const updateFlashcard = () => {
    if (newQuestion !== '' && newAnswer !== '') {
      handleSaveClick(Object.assign({}, flashcard, { question: newQuestion, answer: newAnswer }));
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <React.Fragment>
      <Grid item xs>
        <TextField
          id="outlined-dense"
          label="Modify question"
          value={newQuestion}
          onKeyPress={e => (e.key === 'Enter' ? updateFlashcard() : '')}
          onChange={e => setNewQuestion(e.target.value)}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
      </Grid>
      <Grid item xs>
        <TextField
          id="outlined-dense"
          label="Modify answer"
          value={newAnswer}
          onKeyPress={e => (e.key === 'Enter' ? updateFlashcard() : '')}
          onChange={e => setNewAnswer(e.target.value)}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Save"
          onClick={updateFlashcard}
        >
          <Save fontSize="small" />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
};

QuizFormFlashcardsEditRow.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuizFormFlashcardsEditRow);
