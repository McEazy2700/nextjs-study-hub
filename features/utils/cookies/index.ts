import Cookies from 'js-cookie'

const getCookie = Cookies.get
const setCookie = Cookies.set
export const getToken = ()=>{
  return getCookie('token')
}

export const getRefreshToken = ()=>{
  return getCookie('refresh')
}

export const setAuthToken = (token: string, refresh: string)=>{
  setCookie('token', token, { sameSite: "None"})
  setCookie('refresh', refresh, { sameSite: "None"})
}
