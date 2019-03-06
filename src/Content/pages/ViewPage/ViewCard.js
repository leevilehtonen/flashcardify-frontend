import React, { useState } from 'react';
import { withStyles, Card, CardContent, Typography, Divider, Collapse } from '@material-ui/core';
import PropTypes from 'prop-types';
import QuizCardMedia from '../../common/QuizCardMedia';
import ViewRating from './ViewRating';
import ViewStatistics from './ViewStatistics';
import ViewActions from './ViewActions';
import ViewFlashcards from './ViewFlashcards';
import ProgressView from '../../common/ProgressView';

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
  },
});
const ViewCard = ({ classes, quiz, fetchFlashcards, navigate }) => {
  const [expanded, setExpanded] = useState(false);
  const [fetching, setFetching] = useState(true);

  const toggleExpand = async () => {
    setExpanded(!expanded);
    if (quiz.flashcards === undefined || quiz.flashcards.length === 0) {
      setFetching(true);
      await fetchFlashcards();
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
        <ViewRating rating={Number(quiz.rating)} total={Number(quiz.ratings)} />
        <ViewStatistics
          tries={Number(quiz.tries)}
          dones={Number(quiz.successes)}
          difficulty={quiz.difficulty}
        />
        <Divider />
        <Typography variant="body2" className={classes.description}>
          {quiz.description}
        </Typography>
      </CardContent>
      <ViewActions
        expanded={expanded}
        toggleExpand={toggleExpand}
        navigate={navigate}
        id={quiz.id}
      />
      <Collapse in={expanded}>
        <Divider />
        {fetching && (
          <div className={classes.progress}>
            <ProgressView page={false} />
          </div>
        )}
        {!fetching && <ViewFlashcards flashcards={quiz.flashcards} />}
      </Collapse>
    </Card>
  );
};

ViewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  fetchFlashcards: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default withStyles(styles)(ViewCard);
