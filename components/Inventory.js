import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InventoryGrid from './InventoryGrid';
import useStyles from '../styles/Wrapper.module'
import Balance from './Balance';

const Inventory = ({ token, userId, inventory }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {/* Inventory */}
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <InventoryGrid title="Inventory" userId={userId} data={inventory}/>
        </Paper>
      </Grid>
      {/* Balance */}
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Balance token={token}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Inventory;