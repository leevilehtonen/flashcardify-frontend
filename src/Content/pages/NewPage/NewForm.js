import React, { useState } from 'react';
import { List, Typography, ListItem, Grid, Paper, Divider } from '@material-ui/core';
import NewFormRow from './NewFormRow';
import NewFormAddRow from './NewFormAddRow';

const NewForm = () => {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <Paper>
      <List>
        <ListItem>
          <Grid container spacing={8}>
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
          <NewFormRow
            key={id}
            count={id + 1}
            flashcard={flashcard}
            handleSaveClick={newFlashcard => {
              const newFlashcards = [...flashcards];
              newFlashcards[id] = newFlashcard;
              setFlashcards(newFlashcards);
            }}
            handleDeleteClick={() =>
              setFlashcards([...flashcards.slice(0, id), ...flashcards.slice(id + 1)])
            }
          />
        ))}
        <NewFormAddRow handleAddClick={flashcard => setFlashcards(flashcards.concat(flashcard))} />
      </List>
    </Paper>
  );
};

export default NewForm;
