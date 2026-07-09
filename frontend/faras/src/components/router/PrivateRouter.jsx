/*
=========================================
PRIVATEROUTER.JSX
=========================================

Purpose:
- Protects private routes/pages.
- Checks whether the user is logged in.
- Allows access only if an access token exists.
- Redirects unauthenticated users to the login page.

Why use this file?
- Prevents users from accessing protected pages
  like Dashboard, Profile, Orders, etc.
- Centralizes route protection instead of checking
  authentication inside every page.

How it works:
- Token exists  -> Render protected page (<Outlet />)
- No token      -> Redirect to /login (<Navigate />)
*/

import {Navigate, Outlet } from "react-router-dom"

const isAuthenticated = () => !!localStorage.getItem("access_token");

export default function PrivateRouter({redirectTo = '/login'}){
    return isAuthenticated()? <Outlet/> : <Navigate to={redirectTo} replace/>
}