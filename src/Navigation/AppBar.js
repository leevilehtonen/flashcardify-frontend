import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const TitleBar = ({ classes, handleMobileDrawerToggle, mobileDrawerOpen }) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleMobileDrawerToggle(!mobileDrawerOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Typography variant="h6" color="inherit" noWrap>
        Flashcardify
      </Typography>
    </Toolbar>
  </AppBar>
);

TitleBar.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
  handleMobileDrawerToggle: PropTypes.func.isRequired,
  mobileDrawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TitleBar);
