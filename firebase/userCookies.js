import cookies from 'js-cookie'

export const getUserFromCookie = () => {
    const cookie = cookies.get('auth')
    if (!cookie) {
        return
    }
    return JSON.parse(cookie)
}

export const setUseCookie = () => {
    cookies.set('auth', user, {
        expires: 1 / 24
    })

}

export const removeCookies = () => cookies.remove('auth')