import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import style from 'assets/jss/components/sideBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from 'store/user/user.actions';

const useStyles = makeStyles(style);

const Sidebar = ({ image, routes }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user: { user: userState } }) => userState);
  const classes = useStyles();
  /*
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1;
  }
*/
  const header = (
    <div className={classes.header}>
      <Typography variant="h4">{user.name}</Typography>
    </div>
  );

  const links = (
    <List className={classes.list}>
      {
        routes.map((route, key) => (route.roles.includes(user.role.id)
          ? (
            <NavLink
              className={classes.item}
              key={key}
              to={`/${user.role.name}${route.path}`}
              activeClassName="activeItem"
            >
              <ListItem id="buttonActivated" button className={classes.itemLink}>
                <Icon className={classes.itemIcon} component={route.icon} />
                <ListItemText className={classes.itemText} primary={route.name} disableTypography />
              </ListItem>
            </NavLink>
          )
          : null))
      }
      <ListItem button className={classes.itemLink} onClick={() => dispatch(logout())}>
        <Icon className={classes.itemIcon} component={ExitToAppIcon} />
        <ListItemText className={classes.itemText} primary="Log out" disableTypography />
      </ListItem>
    </List>
  );

  return (
    <div>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
        >
          {header}
          <div className={classes.sideBarWrapper}>{links}</div>
          <div className={classes.background} style={{ backgroundImage: `url(${image})` }} />
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <h1>This is small screen</h1>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.array.isRequired,
};

export default Sidebar;
