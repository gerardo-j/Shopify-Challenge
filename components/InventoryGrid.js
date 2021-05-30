import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SellButton from './SellButton'
import Title from './Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({ title, userId, inv, setBalance }) {
    const [inventory, setInventory] = useState(inv);
    const classes = useStyles();
    const notify = () => toast.success('Successfully sold for $10', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });;
    const updateInventory = id => {
      setInventory( inventory.filter(item => item.transaction_id !== id))
      setBalance( prev => prev + 10)
      notify()
    }

  return (
    <>
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
          {inventory.map((tx) => (
            <TableRow key={tx.transaction_id}>
              <TableCell>{tx.transaction_id}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell><a href={tx.thumbnailUrl} target="_blank">View image</a></TableCell>
              <TableCell align="right">
                    <SellButton updateInventory={updateInventory} thumbnailUrl={tx.thumbnailUrl} date={tx.date} photoId={tx.photoId} albumId={tx.albumId} userId={userId} transaction_id={tx.transaction_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}></div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
}