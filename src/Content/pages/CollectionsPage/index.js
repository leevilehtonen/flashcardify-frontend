import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import CollectionCard from './CollectionCard';
import { getQuizzes } from '../../../services/quizzes';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const CollectionsPage = ({ classes, history }) => {
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    const results = await getQuizzes();
    setQuizzes(results);
  };

  const redirect = path => {
    history.push(path);
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container justify="flex-start" spacing={3}>
        {quizzes.map(quiz => (
          <Grid key={quiz.id} item xs={12} sm={6} lg={4} xl={3}>
            <CollectionCard quiz={quiz} redirect={redirect} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

CollectionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollectionsPage);
