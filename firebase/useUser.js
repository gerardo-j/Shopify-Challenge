import initFirebase from './initFirebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { mapUserData } from './mapUserData'
import { removeUserCookie, setUserCookie, getUserFromCookie } from './userCookies'


initFirebase()

const useUser = () => {
    const [user, setUser] = useState()
    const router = useRouter()

    const logout = async () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                router.push('/auth')
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const cancelAuthListener = firebase.auth().onIdTokenChanged( user => {
            if (user) {
                const userData = mapUserData(user)
                setUserCookie(userData)
                setUser(userData)
            } else {
                removeUserCookie()
                setUser()
            }
        })

        const userFromCookie = getUserFromCookie()
        if (!userFromCookie) {
            router.push('/')
            return
        }

        setUser(userFromCookie)
        
        return () => {
            cancelAuthListener()
        }
        
    }, [])

    return { user, logout}
}

export { useUser }