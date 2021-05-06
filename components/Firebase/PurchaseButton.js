import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'
// import admin from '../../firebase/firebaseAdmin'
// import verifyIdToken from '../../firebase/firebaseAdmin'
const PurchaseButton = ({ albumnId, photoId}) => {
    const admin = require('firebase-admin')
    const { user } = useUser()
    const doc = firebase().collection('users').doc(user.id)

    const completePurchase = () => {
        try {
            doc.update({
                    balance: admin.firestore.FieldValue.increment(-10),
                    inventory: admin.firestore.FieldValue.arrayUnion({ albumnId, photoId}),
                    total_inventory: admin.firestore.FieldValue.increment(1),
                    total_sales: admin.firestore.FieldValue.increment(1),
                })
                .then(alert('Successfully sent data to da cloud!'))
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
