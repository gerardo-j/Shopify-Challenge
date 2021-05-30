import initAuth from '../../initAuth' // the module you created above
import { getFirebaseAdmin } from 'next-firebase-auth'

initAuth()

const handler = async (req, res) => {
    
    const data = {
        name: req.headers.displayname,
        balance: 400,
        inventory: [],
        total_inventory: 0,
        total_sales: 0,
        total_bought: 0,
    }

    try {
      const db = getFirebaseAdmin().firestore()
      const doc = await db.collection('user').doc(req.headers.userid)
      await doc.set( data, { merge: true })
        
      return res.status(200).json({"Status": "Successful"})
    } catch(err) {
      res.status(500).json({"Status": "error"})
    }
}

export default handler