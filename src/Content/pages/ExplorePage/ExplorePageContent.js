import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Zoom, Grid, withStyles, CircularProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import QuizCard from '../../common/QuizCard';

const styles = theme => ({
  progress: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(6),
    textAlign: 'center',
  },
});

const ExplorePageContent = ({
  redirect,
  quizzes,
  hasMoreQuizzes,
  fetchMoreQuizzes,
  contentRef,
  quizzesPerPage,
  classes,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const actions = id => [
    {
      name: 'Open',
      color: 'primary',
      variant: 'contained',
      fullWidth: true,
      action: () => {
        redirect(`/view/${id}`);
      },
    },
    {
      name: 'Add',
      color: 'primary',
      fullWidth: true,
      action: () => {
        redirect(`/view/${id}`);
      },
    },
  ];

  return (
    <div>
      <InfiniteScroll
        scrollableTarget={contentRef.current}
        dataLength={quizzes.length} // This is important field to render the next data
        next={fetchMoreQuizzes}
        hasMore={hasMoreQuizzes}
        scrollThreshold={0.95}
        loader={
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        }
      >
        <Grid container justify="flex-start" spacing={3}>
          {quizzes.map((quiz, id) => (
            <Grid key={quiz.id} item xs={12} sm={6} lg={4} xl={3}>
              <Zoom
                timeout={600}
                in={visible}
                style={{ transitionDelay: `${id % quizzesPerPage}00ms` }}
              >
                <div>
                  <QuizCard quiz={quiz} actions={actions(quiz.id)} header />
                </div>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

ExplorePageContent.propTypes = {
  redirect: PropTypes.func.isRequired,
  quizzes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  hasMoreQuizzes: PropTypes.bool.isRequired,
  fetchMoreQuizzes: PropTypes.func.isRequired,
  contentRef: PropTypes.object.isRequired,
  quizzesPerPage: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExplorePageContent);
