import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import DrawerList from './DrawerList';

const DrawerListBottom = () => (
  <DrawerList
    items={[
      {
        icon: <HelpIcon />,
        text: 'Help',
        to: '',
      },
      {
        icon: <SettingsIcon />,
        text: 'Settings',
        to: '',
      },
    ]}
  />
);
export default DrawerListBottom;
