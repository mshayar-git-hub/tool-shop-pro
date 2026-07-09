/*
=========================================
AUTH.JSX
=========================================

Purpose:
- Stores JWT tokens after login.
- Removes JWT tokens during logout.

Note:
- Authorization headers are handled automatically
  by Axios (api.js), so this file is only responsible
  for saving and removing tokens.
*/


export const saveToken = (tokens) =>{
    localStorage.setItem("access_token",tokens.access)
    localStorage.setItem("refresh_token",tokens.refresh)
}

export const removeToken = (tokens) =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}
