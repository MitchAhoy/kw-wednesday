import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/current_user')
                const data = res.data
                if (data) setUser(data)
                return
            } catch (err) {
                throw new Error(err)
            }
        }
        fetchUser()
    }, [])

    return (
        <UserContext.Provider value={}>
            {...children}
        </UserContext.Provider>
    )
} 