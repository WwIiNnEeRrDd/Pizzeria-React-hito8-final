import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(true);

    const logout = () => {
        setUserToken(false);
    }

    const values = {
        userToken,
        logout
    }

    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )

}