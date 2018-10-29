import React from 'react';
import TitleBar from './AppBar';
import Drawer from './Drawer';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileDrawerOpen: false,
    };
  }

  handleMobileDrawerToggle = open => () => {
    this.setState({ mobileDrawerOpen: open });
  };

  render() {
    const { mobileDrawerOpen, location } = this.state;
    return (
      <React.Fragment>
        <TitleBar
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerToggle={this.handleMobileDrawerToggle}
        />
        <Drawer
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerToggle={this.handleMobileDrawerToggle}
          location={location}
        />
      </React.Fragment>
    );
  }
}

export default Navigation;
