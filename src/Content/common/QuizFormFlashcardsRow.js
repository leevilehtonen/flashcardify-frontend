import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Grid, Collapse, Divider } from '@material-ui/core';
import QuizFormFlashcardsListRow from './QuizFormFlashcardsListRow';
import QuizFormFlashcardsEditRow from './QuizFormFlashcardsEditRow';

const QuizFormFlashcardsRow = ({ count, flashcard, handleSaveClick, handleDeleteClick }) => {
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  const toggleEditMode = visible => {
    setShow(false);
    setTimeout(() => setEdit(visible), 300);
    setTimeout(() => setShow(true), 300);
  };

  return (
    <React.Fragment>
      <Collapse in={show} unmountOnExit>
        <ListItem>
          <Grid container spacing={1} alignItems="center">
            {edit ? (
              <QuizFormFlashcardsEditRow
                flashcard={flashcard}
                handleSaveClick={newFlashcard => {
                  handleSaveClick(newFlashcard);
                  toggleEditMode(false);
                }}
              />
            ) : (
              <QuizFormFlashcardsListRow
                count={count}
                flashcard={flashcard}
                handleEditClick={() => {
                  toggleEditMode(true);
                }}
                handleDeleteClick={() => {
                  setShow(false);
                  setTimeout(() => {
                    handleDeleteClick();
                  }, 300);
                }}
              />
            )}
          </Grid>
        </ListItem>
        <Divider />
      </Collapse>
    </React.Fragment>
  );
};

QuizFormFlashcardsRow.propTypes = {
  count: PropTypes.number.isRequired,
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default QuizFormFlashcardsRow;
