import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    
    const [userEmail, setUserEmail] = useState(null);
    const [userToken, setuserToken] = useState(null);

    const login = async (email, password) => {
        try {
          const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (res.ok) {
            setUserEmail(data.email);
            setuserToken(data.token);
            localStorage.setItem("token", data.token);
          } else {
            alert("Error en inicio de sesión");
          }
        } catch (error) {
          console.error("Error en login:", error);
        }
      };

    
      const register = async (email, password) => {
        try {
          const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (res.ok) {
            login(email, password); 
          } else {
            alert("Error en registro");
          }
        } catch (error) {
          console.error("Error en registro:", error);
        }
      };

    const logout = () => {
        setUserEmail(null);
        setuserToken(null);
        localStorage.removeItem("token");
    }

    const getProfile = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/auth/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          if (res.ok) {
            setUser(data.email);
          }
        } catch (error) {
          console.error("Error obteniendo perfil:", error);
        }
      };

    const values = {
        userToken,
        userEmail,
        getProfile,
        logout,
        login,
        register
    }

    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )

}