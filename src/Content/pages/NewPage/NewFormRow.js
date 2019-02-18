import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Grid, Collapse, Divider } from '@material-ui/core';
import NewFormListRow from './NewFormListRow';
import NewFormEditRow from './NewFormEditRow';

const NewFormRow = ({ count, flashcard, handleSaveClick, handleDeleteClick }) => {
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
          <Grid container spacing={8} alignItems="center">
            {edit ? (
              <NewFormEditRow
                flashcard={flashcard}
                handleSaveClick={newFlashcard => {
                  handleSaveClick(newFlashcard);
                  toggleEditMode(false);
                }}
              />
            ) : (
              <NewFormListRow
                count={count}
                flashcard={flashcard}
                handleEditClick={() => {
                  toggleEditMode(true);
                }}
                handleDeleteClick={() => {
                  setShow(false);
                  setTimeout(() => handleDeleteClick(), 300);
                }}
              />
            )}
          </Grid>
        </ListItem>
      </Collapse>
      <Divider />
    </React.Fragment>
  );
};

NewFormRow.propTypes = {
  count: PropTypes.number.isRequired,
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default NewFormRow;
