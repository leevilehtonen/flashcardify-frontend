import React from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import CollectionsIcon from '@material-ui/icons/Collections';
import AddIcon from '@material-ui/icons/Add';
import DrawerList from './DrawerList';

const DrawerListTop = () => (
  <DrawerList
    items={[
      {
        icon: AddIcon,
        text: 'New',
        to: '/new',
      },
      {
        icon: CollectionsIcon,
        text: 'Collections',
        to: '/collections',
      },
      {
        icon: ExploreIcon,
        text: 'Explore',
        to: '/explore',
      },
    ]}
  />
);
export default DrawerListTop;
