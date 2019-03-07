import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, ListItem, Grid, Paper, Divider } from '@material-ui/core';
import QuizFormFlashcardsRow from './QuizFormFlashcardsRow';
import QuizFormFlashcardsAddRow from './QuizFormFlashcardsAddRow';

const QuizFormFlashcards = ({ flashcards, setFlashcards }) => {
  return (
    <Paper>
      <List>
        <ListItem>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography variant="subtitle2" gutterBottom>
                Nr.
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="subtitle2" gutterBottom>
                Question
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2" gutterBottom>
                Answer
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />

        {flashcards.map((flashcard, id) => (
          <QuizFormFlashcardsRow
            key={flashcard.id}
            count={id + 1}
            flashcard={flashcard}
            handleSaveClick={newFlashcard => {
              const newFlashcards = [...flashcards];
              newFlashcards[id] = newFlashcard;
              setFlashcards(newFlashcards);
            }}
            handleDeleteClick={() => {
              const newFlashcards = [...flashcards];
              newFlashcards.splice(id, 1);
              setFlashcards(newFlashcards);
            }}
          />
        ))}
        <QuizFormFlashcardsAddRow
          handleAddClick={flashcard => setFlashcards(flashcards.concat(flashcard))}
        />
      </List>
    </Paper>
  );
};

QuizFormFlashcards.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setFlashcards: PropTypes.func.isRequired,
};

export default QuizFormFlashcards;
