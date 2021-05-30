import { getFirebaseClient } from 'next-firebase-auth'
import 'firebase/firestore';  // This is very important
import Button from '@material-ui/core/Button';

const PurchaseButton = ({thumbnailUrl, userId, albumId, photoId, notify}) => {
    
    const completePurchase = () => {
        const doc = getFirebaseClient().firestore().collection('user').doc(userId)

        const transaction_id = Math.floor(Math.random() * 10000)
        try {
            doc.update({
                    balance: getFirebaseClient().firestore.FieldValue.increment(-10),
                    inventory: getFirebaseClient().firestore.FieldValue.arrayUnion({
                        transaction_id,
                        albumId,
                        photoId,
                        thumbnailUrl,
                        date: String(new Date())
                    }),
                    total_inventory: getFirebaseClient().firestore.FieldValue.increment(1),
                    total_bought: getFirebaseClient().firestore.FieldValue.increment(1),
                })
                .then(notify())
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Button onClick={completePurchase} size="small" color="primary">
                $10 Purchase
            </Button>
        </div>
    )
}

export default PurchaseButton
