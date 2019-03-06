import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import CollectionCard from './CollectionCard';
import { getQuizzes } from '../../../services/quizzes';
import ProgressView from '../../common/ProgressView';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: theme.spacing(3),
  },
});

const CollectionsPage = ({ classes, history }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchQuizzes = async () => {
    const results = await getQuizzes();
    setQuizzes(results);
    setFetching(false);
  };

  const redirect = path => {
    history.push(path);
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (fetching) {
    return <ProgressView />;
  }

  return (
    <div className={classes.root}>
      <Grid container justify="flex-start" spacing={3}>
        {quizzes.map(quiz => (
          <Grid key={quiz.id} item xs={12} sm={6} lg={4} xl={3}>
            <CollectionCard quiz={quiz} redirect={redirect} />
          </Grid>
        ))}
      </Grid>
      )
    </div>
  );
};

CollectionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollectionsPage);
