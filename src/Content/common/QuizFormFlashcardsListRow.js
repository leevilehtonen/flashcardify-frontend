import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, IconButton, withStyles } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

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

const QuizFormFlashcardsListRow = ({
  classes,
  count,
  flashcard: { question, answer },
  handleEditClick,
  handleDeleteClick,
}) => (
  <React.Fragment>
    <Grid item xs={1}>
      <Typography variant="body1" gutterBottom>
        {count}
      </Typography>
    </Grid>
    <Grid item xs={5} onDoubleClick={handleEditClick}>
      <Typography variant="body1" gutterBottom>
        {question}
      </Typography>
    </Grid>
    <Grid item xs onDoubleClick={handleEditClick}>
      <Typography variant="body1" gutterBottom>
        {answer}
      </Typography>
    </Grid>
    <Grid item>
      <IconButton
        color="secondary"
        className={classes.button}
        aria-label="Edit"
        onClick={handleEditClick}
      >
        <Edit fontSize="small" />
      </IconButton>
      <IconButton
        color="primary"
        className={classes.button}
        aria-label="Delete"
        onClick={handleDeleteClick}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Grid>
  </React.Fragment>
);

QuizFormFlashcardsListRow.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuizFormFlashcardsListRow);
