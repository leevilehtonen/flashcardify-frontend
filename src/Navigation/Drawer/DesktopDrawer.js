import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core';
import DrawerContent from './DrawerContent';

const styles = {
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
};

const DesktopDrawer = ({ classes }) => (
  <Drawer
    variant="permanent"
    open
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <DrawerContent />
  </Drawer>
);

DesktopDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DesktopDrawer);
