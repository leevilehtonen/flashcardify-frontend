import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';
import PredictPage from './pages/PredictPage';
import CollectionsPage from './pages/CollectionsPage';
import ExplorePage from './pages/ExplorePage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

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

const Content = ({ classes }) => {
  const contentRef = useRef(null);

  return (
    <main className={classes.root}>
      <div className={classes.toolbar} />
      <div className={classes.content} ref={contentRef}>
        <Route exact path="/predict/:id" component={PredictPage} />
        <Route exact path="/new" component={NewPage} />
        <Route
          exact
          path="/collections"
          render={props => <CollectionsPage {...props} contentRef={contentRef} />}
        />
        <Route
          exact
          path="/explore"
          render={props => <ExplorePage {...props} contentRef={contentRef} />}
        />
        <Route exact path="/view/:id" component={ViewPage} />
        <Route exact path="/edit/:id" component={EditPage} />
      </div>
    </main>
  );
};

Content.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
};

export default withRouter(withStyles(styles)(Content));
