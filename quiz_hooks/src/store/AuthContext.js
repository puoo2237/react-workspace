import { createContext, useState } from "react";

const initState = { isLoggedIn: false, user: null }
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(
        (JSON.parse(sessionStorage.getItem("auth")) || initState)
    )

    const login = (id) => {
        const newAuth = { isLoggedIn: true, user: id }
        setAuth(newAuth)
        sessionStorage.setItem("auth", JSON.stringify(newAuth))
    }

    const logout = () => {
        setAuth(initState)
        sessionStorage.clear()
    }
    const value = {login, logout, auth}
    return(<>
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
    </>)
}