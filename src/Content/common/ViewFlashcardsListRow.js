import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Grid, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  listItem: {
    padding: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});
const ViewFlashcardsRow = ({ classes, count, question, answer, variant }) => {
  return (
    <ListItem className={classes.listItem}>
      <Grid container spacing={1} alignItems="flex-start">
        <Grid item xs={1}>
          <Typography variant={variant}>{count}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant={variant}>{question}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant={variant}>{answer}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

ViewFlashcardsRow.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

ViewFlashcardsRow.defaultProps = {
  variant: 'body2',
};

export default withStyles(styles)(ViewFlashcardsRow);
