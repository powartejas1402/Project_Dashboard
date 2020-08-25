import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 320,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  div: {
      paddingLeft: '630px',
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
        <Paper component="form" className={classes.root}>
        {/* <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
        </IconButton> */}
        <InputBase
            className={classes.input}
            placeholder="Search here..."
            inputProps={{ 'aria-label': 'search here' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        {/* <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
            <DirectionsIcon />
        </IconButton> */}
        </Paper>
      </div>
  );
}
