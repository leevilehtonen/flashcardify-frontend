import React, { useState } from 'react';
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Divider,
  Collapse,
  CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import QuizCardMedia from '../../common/QuizCardMedia';
import ViewRating from '../../common/ViewRating';
import ViewStatistics from '../../common/ViewStatistics';
import ViewFlashcards from '../../common/ViewFlashcards';
import QuizCardActions from '../../common/QuizCardActions';

const styles = theme => ({
  root: {
    width: '70vmin',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    marginTop: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
});
const ViewPageContent = ({ classes, quiz, fetchQuiz, redirect }) => {
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
      await fetchQuiz(true);
      setFetching(false);
    }
  };
  return (
    <Card className={classes.root}>
      <QuizCardMedia url="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {quiz.title}
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
  );
};

ViewPageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  fetchQuiz: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default withStyles(styles)(ViewPageContent);
