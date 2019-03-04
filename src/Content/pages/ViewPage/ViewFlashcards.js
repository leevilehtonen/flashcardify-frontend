import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CardContent, Typography, Divider } from '@material-ui/core';
import ViewFlashcardsList from './ViewFlashcardsList';

const styles = theme => ({
  root: {},
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

const ViewFlashcards = ({ classes, flashcards }) => {
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
        <ViewFlashcardsList flashcards={flashcards} />
      </CardContent>
    </div>
  );
};

ViewFlashcards.propTypes = {
  classes: PropTypes.object.isRequired,
  flashcards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default withStyles(styles)(ViewFlashcards);
