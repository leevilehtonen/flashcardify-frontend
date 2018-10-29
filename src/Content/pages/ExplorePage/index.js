import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import ExploreCard from './ExploreCard';
import mockData from '../../../quizzes.json';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: mockData,
    };
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const { quizzes } = this.state;

    return (
      <div className={classes.root}>
        <Grid container justify="flex-start" spacing={24}>
          {quizzes.map(quiz => (
            <Grid key={quiz.id} item xs={12} sm={6} lg={4} xl={3}>
              <ExploreCard quiz={quiz} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ExplorePage);
