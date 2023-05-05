export const setAccessTokenToLS = (access_token) => {
    localStorage.setItem('access_token', `Bearer ${access_token}`)
}

export const clearLS = () => {
    localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const getProfileFromLS = () => {
    const result = localStorage.getItem('profile')
    return result ? JSON.parse(result) : null
}
  
export const setProfileToLS = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile))
}
  