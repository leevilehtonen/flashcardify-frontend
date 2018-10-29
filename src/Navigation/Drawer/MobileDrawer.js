import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core';
import DrawerContent from './DrawerContent';

const styles = {
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
};

const MobileDrawer = ({ classes, mobileDrawerOpen, handleMobileDrawerToggle }) => (
  <SwipeableDrawer
    variant="temporary"
    anchor="left"
    open={mobileDrawerOpen}
    onClose={handleMobileDrawerToggle(false)}
    onOpen={handleMobileDrawerToggle(true)}
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    <DrawerContent />
  </SwipeableDrawer>
);

MobileDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  mobileDrawerOpen: PropTypes.bool.isRequired,
  handleMobileDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(MobileDrawer);
