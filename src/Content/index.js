import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import PredictPage from './pages/PredictPage';
import CollectionsPage from './pages/CollectionsPage';
import ExplorePage from './pages/ExplorePage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';
import TestPage from './pages/TestPage';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'auto',
    flexGrow: 1,
  },
  fadeEnter: {
    opacity: 0.01,
    zIndex: 1,
  },
  fadeEnterActive: {
    opacity: 1,
    transition: 'opacity 300ms ease-in',
  },
  fadeExit: {
    opacity: 1,
  },
  fadeExitActive: {
    opacity: 0,
    transition: 'opacity 300ms ease-out',
  },
});

const Content = ({ location, classes }) => {
  const content = useRef(null);

  useLayoutEffect(() => {
    content.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main ref={content} className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.wrapper}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames={{
              enter: classes.fadeEnter,
              enterActive: classes.fadeEnterActive,
              exit: classes.fadeExit,
              exitActive: classes.fadeExitActive,
            }}
            unmountOnExit
            mountOnEnter
          >
            <Switch location={location}>
              <Route exact path="/predict/:id" component={PredictPage} />
              <Route exact path="/new" component={NewPage} />
              <Route exact path="/collections" component={CollectionsPage} />
              <Route exact path="/explore" component={ExplorePage} />
              <Route exact path="/view/:id" component={ViewPage} />
              <Route exact path="/edit/:id" component={EditPage} />
              <Route exact path="/test" component={TestPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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
