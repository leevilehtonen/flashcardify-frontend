import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';
import PredictPage from './pages/PredictPage';
import CollectionsPage from './pages/CollectionsPage';
import ExplorePage from './pages/ExplorePage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';
import TestPage from './pages/TestPage';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    position: 'relative',
    width: '100%',
    overflow: 'auto',
    flexGrow: 1,
  },
});

const Content = ({ location, classes }) => {
  const content = useRef(null);

  useLayoutEffect(() => {
    content.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main ref={content} className={classes.root}>
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Route exact path="/predict/:id" component={PredictPage} />
        <Route exact path="/new" component={NewPage} />
        <Route exact path="/collections" component={CollectionsPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/view/:id" component={ViewPage} />
        <Route exact path="/edit/:id" component={EditPage} />
        <Route exact path="/test1" component={TestPage} />
        <Route exact path="/test2" component={TestPage} />
      </div>
    </main>
  );
};

Content.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Content));

/*
        <FadeRoute show={show} path="/new" component={NewPage} />
          <FadeRoute show={show} path="/collections" component={CollectionsPage} />
          <FadeRoute show={show} path="/explore" component={ExplorePage} />
*/
