import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import DrawerListTop from './DrawerListTop';
import DrawerListBottom from './DrawerListBottom';

const styles = theme => ({
  autoBottom: {
    marginBottom: 'auto',
  },
  toolbar: theme.mixins.toolbar,
});

const DrawerContent = ({ classes }) => (
  <React.Fragment>
    <div className={classes.toolbar} />
    <Divider />
    <DrawerListTop />
    <Divider className={classes.autoBottom} />
    <Divider />
    <DrawerListBottom />
  </React.Fragment>
);

DrawerContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerContent);
