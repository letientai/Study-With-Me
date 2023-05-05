export const setAccessTokenToLS = (access_token) => {
    localStorage.setItem('access_token', `Bearer ${access_token}`)
}

export const clearLS = () => {
    localStorage.removeItem('access_token')
}

export const clearUser = () => {
    localStorage.removeItem('user')
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const getProfileFromLS = () => {
    const result = localStorage.getItem('user')
    return result ? JSON.parse(result) : null
}
  
export const setProfileToLS = (profile) => {
    localStorage.setItem('user', JSON.stringify(profile))
}
  
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
