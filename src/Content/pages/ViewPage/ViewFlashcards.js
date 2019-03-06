import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, CardContent, Typography, Divider, Collapse } from '@material-ui/core';
import ViewFlashcardsList from './ViewFlashcardsList';

const styles = theme => ({
  root: {},
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

const ViewFlashcards = ({ classes, flashcards }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Flashcards
        </Typography>
        <Typography gutterBottom variant="body2">
          Below is the list of all flashcards included in this quiz.
        </Typography>
        <Divider className={classes.divider} />
        <Collapse in={show} timeout={1000}>
          <ViewFlashcardsList flashcards={flashcards} />
        </Collapse>
      </CardContent>
    </div>
  );
};

ViewFlashcards.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default withStyles(styles)(ViewFlashcards);
