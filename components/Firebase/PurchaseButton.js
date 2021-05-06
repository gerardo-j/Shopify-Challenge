import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const PurchaseButton = () => {
    const { user } = useUser()
    const completePurchase = ({alblumn}) => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(user.id)
                .set({
                    name: user.name,
                    balance: 100,
                    inventory: [{
                        
                    }],
                    total_inventory: 0,
                    total_sales: 0,
                    total_bought: 0,
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
