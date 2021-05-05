import * as admin from 'firebase-admin'

export const verifyIdToken = (token) => {
    const firebasePrivateKey = process.env.PRIVATE_KEY

    if (!admin.app.length) {
        admin.initializeApp({
            credentials: admin.credentials.cert({
                projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
                clientEmail: process.env.CLIENT_EMAIL,
                privateKey: firebasePrivateKey.replace(/\\n/g, 'n')
            }),
            // databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch( error => {
            throw error
        })
}