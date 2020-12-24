import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import FileMenu from '@components/Menu/ToolStrip/MenuItems/FileMenu';
import EditMenu from '@components/Menu/ToolStrip/MenuItems/EditMenu';
import LevelMenu from '@components/Menu/ToolStrip/MenuItems/LevelMenu';
import HelpMenu from '@components/Menu/ToolStrip/MenuItems/HelpMenu';

import ControlStrip from '@components/Menu/ToolStrip/Control/ControlStrip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FileMenu />
          <EditMenu />
          <LevelMenu />
          <HelpMenu />
        </Toolbar>

      </AppBar>
      <Toolbar>
        <ControlStrip />
      </Toolbar>
    </div>
  );
}

export default MenuContainer;
