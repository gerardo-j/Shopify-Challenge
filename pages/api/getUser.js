import { verifyIdToken } from 'next-firebase-auth'
import initAuth from '../../initAuth' // the module you created above
import { getFirebaseAdmin } from 'next-firebase-auth'

initAuth()


const handler = async (req, res) => {

    try {
      const AuthUser = await verifyIdToken(req.headers.authorization)
  
      const db = getFirebaseAdmin().firestore()
      const doc = await db.collection('user').doc(AuthUser.id).get()
      let data = doc.data()
  
  
      return res.status(200).json(data)
    } catch(err) {
      res.status(500).json({Error: err})
    }
}

export default handler