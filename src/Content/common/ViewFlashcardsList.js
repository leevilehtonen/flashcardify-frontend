import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@material-ui/core';
import ViewFlashcardsListRow from './ViewFlashcardsListRow';

const ViewFlashcardsList = ({ flashcards }) => {
  return (
    <List>
      <ViewFlashcardsListRow count="Nr." question="Question" answer="Answer" variant="subtitle2" />
      {flashcards.map((flashcard, id) => (
        <React.Fragment key={flashcard.id}>
          <Divider />
          <ViewFlashcardsListRow
            key={flashcard.id}
            count={id + 1}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        </React.Fragment>
      ))}
    </List>
  );
};

ViewFlashcardsList.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ViewFlashcardsList;
