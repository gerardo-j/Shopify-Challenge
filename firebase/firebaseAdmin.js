import * as admin from 'firebase-admin'
import serviceAccount from '../secret.json'


export const verifyIdToken = (token) => {
    if (!admin.app.length) {
        admin.initializeApp({
            credentials: admin.credentials.cert(serviceAccount),
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch( error => {
            throw error
        })
}