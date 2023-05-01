export const setAccessTokenToLS = (access_token) => {
    localStorage.setItem('access_token', `Bearer ${access_token}`)
}

export const clearLS = () => {
    localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
