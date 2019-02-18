import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ListItem, TextField, Fab, Grid, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const styles = () => ({
  root: {},
  table: {},
  textField: {
    width: '100%',
  },
  button: {
    marginLeft: 'auto',
  },
  input: {
    width: '100%',
  },
});

const NewFormAddRow = ({ classes, handleAddClick }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const questionInput = useRef(null);

  const addNewFlashcard = () => {
    if (newQuestion !== '' && newAnswer !== '') {
      handleAddClick({ question: newQuestion, answer: newAnswer });
      setNewQuestion('');
      setNewAnswer('');
      questionInput.current.focus();
    }
  };

  return (
    <ListItem>
      <Grid container spacing={16} alignItems="center">
        <Grid item xs>
          <TextField
            id="outlined-dense"
            inputRef={questionInput}
            label="Add question"
            value={newQuestion}
            onKeyPress={e => (e.key === 'Enter' ? addNewFlashcard() : '')}
            onChange={e => setNewQuestion(e.target.value)}
            className={classes.textField}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="outlined-dense"
            label="Add answer"
            value={newAnswer}
            onKeyPress={e => (e.key === 'Enter' ? addNewFlashcard() : '')}
            onChange={e => setNewAnswer(e.target.value)}
            className={classes.textField}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Fab
            size="medium"
            disabled={newQuestion === '' || newAnswer === ''}
            color="primary"
            aria-label="Add"
            className={classes.button}
            onClick={addNewFlashcard}
          >
            <Add />
          </Fab>
        </Grid>
      </Grid>
    </ListItem>
  );
};

NewFormAddRow.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAddClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewFormAddRow);
