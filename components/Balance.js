import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  balanceContext: {
    flex: 1,
  },
});

export default function Balance() {
  const classes = useStyles();
  const date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.balanceContext}>
        on {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
      </Typography>
    </React.Fragment>
  );
}