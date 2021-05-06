
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';
import Link from 'next/link'
import Logout from './Firebase/Logout'

const mainListItems = (
  <div>
    <Link href="/">
      <a>
        <ListItem  button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
      </a>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <Link href="/marketplace">
      <a>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
            <ListItemText primary="Marketplace" />
        </ListItem>
      </a>
    </Link>
    <Logout/>
  </div>
);

export default mainListItems