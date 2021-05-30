import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Balance from './Balance';
import useStyles from '../styles/Wrapper.module'


const Dashboard = ({ balance }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid container spacing={2}>
        {/* Current Balance */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Balance balance={balance} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard