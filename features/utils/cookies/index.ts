import Cookies from 'js-cookie'

const getCookie = Cookies.get
const setCookie = Cookies.set
const removeCookie = Cookies.remove
export const getToken = ()=>{
  return getCookie('token')
}

export const getRefreshToken = ()=>{
  return getCookie('refresh')
}

export const setAuthToken = (token: string, refresh: string)=>{
  setCookie('token', token, { sameSite: "None", secure: true})
  setCookie('refresh', refresh, { sameSite: "None", secure: true})
}

export const removeAuthToken = () => {
  removeCookie('token')
  removeCookie('refresh')
}
