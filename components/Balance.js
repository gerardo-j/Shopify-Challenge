import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  balanceContext: {
    flex: 1,
  },
});

const Balance = ({ balance }) => {
  console.log("Balance component called")
  const classes = useStyles();
  const date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div style={{textAlign: "center"}}>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        ${balance}
      </Typography>
      <Typography color="textSecondary" className={classes.balanceContext}>
        on {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
      </Typography>
    </div>
  );
}

export default Balance;