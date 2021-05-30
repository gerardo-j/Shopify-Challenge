import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFirebaseClient } from 'next-firebase-auth'
import 'firebase/firestore';  // This is very important
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const PurchaseButton = ({ update, userId, albumId, date, photoId, thumbnailUrl, transaction_id}) => {
    
    const completePurchase = () => {
        const doc = getFirebaseClient().firestore().collection('user').doc(userId)
        try {
            doc.update({
                    balance: getFirebaseClient().firestore.FieldValue.increment(10),
                    inventory: getFirebaseClient().firestore.FieldValue.arrayRemove({
                        "albumId": albumId,
                        "date": date,
                        "photoId": photoId,
                        "thumbnailUrl": thumbnailUrl,
                        "transaction_id": transaction_id,
                    }),
                    total_inventory: getFirebaseClient().firestore.FieldValue.increment(-1),
                    total_sales: getFirebaseClient().firestore.FieldValue.increment(1),
                })
                .then(update(transaction_id))
                .then(alert('Successfully sold a photo!'))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Button onClick={completePurchase} size="small" color="primary">
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default PurchaseButton
