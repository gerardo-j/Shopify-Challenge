import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SellButton from './SellButton'
import Title from './Title';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Orders({ title, userId, data }) {
    const [datas, setInventory] = useState(data);
    const classes = useStyles();
    const updateInventory = id => {
        setInventory( datas.filter(item => item.transaction_id !== id))
        (datas)
    }

  return (
    <React.Fragment>
      <Title>{ title }</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Transaction #</TableCell>
            <TableCell>Timpstamp</TableCell>
            <TableCell>Image Link</TableCell>
            <TableCell align="center">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((tx, index) => (
            <TableRow key={tx.transaction_id}>
              <TableCell>{tx.transaction_id}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell><a href={tx.thumbnailUrl} target="_blank">View image</a></TableCell>
              <TableCell align="right">
                    <SellButton update={updateInventory} thumbnailUrl={tx.thumbnailUrl} date={tx.date} photoId={tx.photoId} albumId={tx.albumId} userId={userId} transaction_id={tx.transaction_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}