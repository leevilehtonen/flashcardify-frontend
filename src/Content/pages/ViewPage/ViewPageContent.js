import React, { useState } from 'react';
import {
  withStyles,
  Card,
  Grid,
  CardContent,
  Typography,
  Divider,
  Collapse,
  CircularProgress,
  Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Public } from '@material-ui/icons';
import QuizCardMedia from '../../common/QuizCardMedia';
import ViewRating from '../../common/ViewRating';
import ViewStatistics from '../../common/ViewStatistics';
import ViewFlashcards from '../../common/ViewFlashcards';
import QuizCardActions from '../../common/QuizCardActions';

const styles = theme => ({
  description: {
    marginTop: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
});
const ViewPageContent = ({ classes, quiz, fetchFlashcards, redirect }) => {
  const [expanded, setExpanded] = useState(false);
  const [fetching, setFetching] = useState(true);

  const actions = [
    {
      name: 'Start',
      color: 'primary',
      variant: 'contained',
      fullWidth: false,
      size: 'large',
      action: () => {
        redirect(`/predict/${quiz.id}`);
      },
    },
    {
      name: 'Edit',
      color: 'primary',
      fullWidth: false,
      size: 'large',
      action: () => {
        redirect(`/edit/${quiz.id}`);
      },
    },
  ];

  const toggleExpand = async () => {
    setExpanded(!expanded);
    if (quiz.flashcards === undefined || quiz.flashcards.length === 0) {
      setFetching(true);
      await fetchFlashcards(true);
      setFetching(false);
    }
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} lg={8} xl={6}>
        <Card>
          <QuizCardMedia src={quiz.image} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {quiz.title}{' '}
              {quiz.isPublic ? (
                <Tooltip title="Public" placement="right">
                  <Public color="action" />
                </Tooltip>
              ) : (
                ''
              )}
            </Typography>
            <ViewRating quiz={quiz} />
            <ViewStatistics quiz={quiz} />
            <Divider />
            <Typography variant="body2" className={classes.description}>
              {quiz.description}
            </Typography>
          </CardContent>
          <QuizCardActions actions={actions} expander={{ expanded, toggleExpand }} />
          <Collapse in={expanded}>
            <Divider />
            {fetching ? (
              <div className={classes.progress}>
                <CircularProgress />
              </div>
            ) : (
              <ViewFlashcards flashcards={quiz.flashcards} />
            )}
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
};

ViewPageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  fetchFlashcards: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default withStyles(styles)(ViewPageContent);
