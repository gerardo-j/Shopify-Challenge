import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';


const useStyles = makeStyles({
  balanceContext: {
    flex: 1,
  },
});



const Balance = ({ token }) => {
  const [balance, setBalance] = useState(0)
  const classes = useStyles();
  const date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/getUser`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
    const data = await response.json()

    setBalance(data.balance)
  }, [balance])
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

export default withAuthUser()(Balance)