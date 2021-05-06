import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const FireStoreWrite = () => {
    const { user } = useUser()
    const sendData = () => {
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
            <button onClick={sendData}>Send da Data!</button>
        </div>
    )
}

export default FireStoreWrite
