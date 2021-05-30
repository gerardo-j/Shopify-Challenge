import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InventoryGrid from './InventoryGrid';
import useStyles from '../styles/Wrapper.module'
import Balance from './Balance';

const Inventory = ({ userId, userData }) => {
  const [balance, setBalance] = useState(userData.balance)
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {/* Inventory */}
      <Grid item xs={12} sm={12} md={8}>
        <Paper className={classes.paper}>
          <InventoryGrid title="Inventory" userId={userId} inv={userData.inventory} setBalance={setBalance}/>
        </Paper>
      </Grid>
      {/* Balance */}
      <Grid item xs={12} sm={12} md={4}>
        <Paper className={classes.paper}>
          <Balance balance={balance}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Inventory;