import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const DrawerList = ({ items, location }) => (
  <List component="nav">
    {items.map(item => (
      <ListItem
        component={Link}
        to={item.to}
        selected={location.pathname === item.to}
        button
        key={item.text}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </List>
);
DrawerList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      text: PropTypes.string,
    })
  ).isRequired,
};
export default withRouter(DrawerList);
