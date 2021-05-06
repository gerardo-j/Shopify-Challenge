import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'


const FireStoreRead = () => {

    const { user } = useUser()
    const getData = () => {
        try {
            firebase
                .firestore()
                .collection('user')
                .doc(user.id)
                .onSnapshot(function(doc) {
                    console.log(doc.data())
                })
            alert('Successfully retrieved data from da cloud!')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={getData}>Get da Data!</button>
        </div>
    )
}

export default FireStoreRead
