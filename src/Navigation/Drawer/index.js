import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import MobileDrawer from './MobileDrawer';
import DesktopDrawer from './DesktopDrawer';

const Drawer = ({ mobileDrawerOpen, handleMobileDrawerToggle }) => (
  <React.Fragment>
    <Hidden mdUp>
      <MobileDrawer
        mobileDrawerOpen={mobileDrawerOpen}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
    </Hidden>
    <Hidden smDown>
      <DesktopDrawer />
    </Hidden>
  </React.Fragment>
);

Drawer.propTypes = {
  mobileDrawerOpen: PropTypes.bool.isRequired,
  handleMobileDrawerToggle: PropTypes.func.isRequired,
};

export default Drawer;
